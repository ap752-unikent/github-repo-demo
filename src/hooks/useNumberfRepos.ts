import { numberOfRepos, NumberReposGit } from "../utils/api-client";
import { useQuery } from "react-query";

type Props = {
    queryInput: string;
    type: EntityType;
}

export const useNumberOfRepos = ({queryInput, type} : Props) => {
    const { data: entityData } = useQuery<NumberReposGit>(['numberRepos', queryInput],
        () => numberOfRepos({ name: queryInput, type: type }),
        { enabled: !!queryInput });

    return entityData;
}