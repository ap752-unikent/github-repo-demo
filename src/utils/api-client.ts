import { PAGE_SIZE } from "../constants";

type ApiClientProps = {
    url: string,
    method: string,
}

const apiClient = async ({ url, method }: ApiClientProps) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        return response.text().then(text => { throw new Error(text) })
    }

    return response.json();
}

type RequestReposProps = {
    name: string,
    type: EntityType,
    page: number,
    sortDirection: SortDirection
}

export type RequestReposResponseObj = {
    id: number,
    name: string,
    description: string,
    language: string,
    created_at: string
}

export type NumberReposGit = {
    public_repos: number
}

export const requestReposGit = async ({ name, type, page, sortDirection}: RequestReposProps) => {

    const url = `https://api.github.com/${type}/${name}/repos?type=owned&sort=created&direction=${sortDirection}&per_page=${PAGE_SIZE}&page=${page}`;
    const responseJson = await apiClient({ url, method: 'GET' });

    return responseJson;
}

export const numberOfRepos = async ({ name, type }: Omit<RequestReposProps, "page" | "sortDirection">) => {
    const url = `https://api.github.com/${type}/${name}`;
    const responseJson = await apiClient({ url, method: 'GET' });

    return responseJson;
}