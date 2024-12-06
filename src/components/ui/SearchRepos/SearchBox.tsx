import { IconButton, Input } from "@chakra-ui/react";
import { InputGroup } from "../input-group";
import { IoMdSearch } from "react-icons/io";

type Props = {
    searchBoxInput: string;
    setSearchBoxInput: (value: string) => void;
    setQueryInput: (value: string) => void;
    type: EntityType
}

export const SearchBox = ({
    searchBoxInput,
    setSearchBoxInput,
    setQueryInput,
    type
}: Props) => {
    return (
        <InputGroup flex="1" endElement={<IconButton
            aria-label="Search repos"
            variant="ghost"
            rounded={"full"}
            onClick={() => setQueryInput(searchBoxInput)}
        >
            <IoMdSearch />
        </IconButton>}>
            <Input padding={6} placeholder={`Enter a github ${type === "users" ? "username" : "org name"}`} value={searchBoxInput} onChange={(e) => setSearchBoxInput(e.target.value)} />
        </InputGroup>
    )
}