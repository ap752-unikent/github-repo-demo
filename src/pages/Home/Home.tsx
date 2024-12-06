import { SearchRepos } from "../../components/ui/SearchRepos/SearchRepos";
import { Stack, Text,Tabs } from "@chakra-ui/react"
import { FaRegUser } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";

export const Home = () => {

    return (
        <Stack
            direction={"column"}
            width={"70%"}
            transform={"translateX(30%)"}
            marginTop={8}
            gap={2}
        >
            <Text fontSize="2xl">Search for Github Repos</Text>
            <Tabs.Root 
                defaultValue="users"
                width={"100%"}
                variant={"enclosed"}
            >
                <Tabs.List>
                    <Tabs.Trigger value="users">
                        <FaRegUser />
                        By user
                    </Tabs.Trigger>
                    <Tabs.Trigger value="orgs">
                        <VscOrganization />
                        By organization
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="users">
                    <SearchRepos type="users"/>
                </Tabs.Content>
                <Tabs.Content value="orgs">
                    <SearchRepos type="orgs"/>
                </Tabs.Content>
            </Tabs.Root>
        </Stack>
    )
}