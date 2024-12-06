import { Spinner, Stack } from "@chakra-ui/react"
import { useState } from "react";
import { ReposTable } from "./ReposTable";
import { useRequestRepos } from "../../../hooks/useRequestRepos";
import { SearchBox } from "./SearchBox";

type Props = {
    type: EntityType
}

export const SearchRepos = ({ type }: Props) => {

    const [searchBoxInput, setSearchBoxInput] = useState<string>('');
    const [queryInput, setQueryInput] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    const { repos, reposLoading } = useRequestRepos({ queryInput, type, page, sortDirection });

    return (
        <Stack>
            <SearchBox
                searchBoxInput={searchBoxInput}
                setSearchBoxInput={setSearchBoxInput}
                setQueryInput={setQueryInput}
                type={type}
            />
            {reposLoading && <Spinner
                size={"lg"}
                alignSelf={"center"}
            />}
            {repos && repos.length > 0 && (
                <ReposTable
                    type={type}
                    page={page}
                    repos={repos}
                    queryInput={queryInput}
                    setPage={setPage}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                />)}
        </Stack>
    )
}