import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from "../pagination";
import { HStack, IconButton, Stack, Table } from "@chakra-ui/react"
import { RequestReposResponseObj } from "../../../utils/api-client";
import { PAGE_SIZE } from "../../../constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNumberOfRepos } from "../../../hooks/useNumberfRepos";

type Props = {
    repos: RequestReposResponseObj[]
    queryInput: string;
    type: EntityType;
    page: number;
    setPage: (value: number) => void;
    sortDirection: SortDirection;
    setSortDirection: (value: SortDirection) => void;
}

export const ReposTable = ({ repos, queryInput, type, page, setPage, sortDirection, setSortDirection}: Props) => {

    const entityData = useNumberOfRepos({ queryInput, type });

    return (
        <Stack gap={4} marginBottom={16}>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>
                            <Stack direction={"row"} alignItems={"center"}>
                                Created At
                                <IconButton 
                                    size={"xs"} 
                                    rounded="full" 
                                    variant={"ghost"}
                                    onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                                >
                                   {
                                        sortDirection === "asc" ? <FaChevronUp /> : <FaChevronDown />
                                   }
                                </IconButton>
                            </Stack>
                        </Table.ColumnHeader>
                        <Table.ColumnHeader>Description</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Language</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {repos.map((repo) => (
                        <Table.Row key={repo.id}>
                            <Table.Cell>{repo.name}</Table.Cell>
                            <Table.Cell>{format(parseISO(repo.created_at), "dd/MM/yyyy")}</Table.Cell>
                            <Table.Cell>{repo.description}</Table.Cell>
                            <Table.Cell textAlign="end">{repo.language}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            {
                entityData?.public_repos && (
                    <PaginationRoot
                        count={entityData.public_repos}
                        pageSize={PAGE_SIZE}
                        page={page}
                        onPageChange={(details) => setPage(details.page)}
                    >
                        <HStack wrap="wrap">
                            <PaginationPrevTrigger />
                            <PaginationItems />
                            <PaginationNextTrigger />
                        </HStack>
                    </PaginationRoot>)
            }
        </Stack>
    )
}