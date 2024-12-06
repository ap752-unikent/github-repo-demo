import { useQuery } from "react-query";
import { requestReposGit, RequestReposResponseObj } from "../utils/api-client";

type Props = {
    queryInput: string;
    type: EntityType;
    page: number;
    sortDirection: SortDirection;
}

export const useRequestRepos = ({ queryInput, type, page, sortDirection}: Props) => {
    const { data: repos, isLoading: reposLoading } = useQuery<RequestReposResponseObj[]>(['repos', queryInput, page, sortDirection],
        () => requestReposGit({ name: queryInput, type: type, page, sortDirection}),
        { enabled: !!queryInput });

    return { repos, reposLoading };
}