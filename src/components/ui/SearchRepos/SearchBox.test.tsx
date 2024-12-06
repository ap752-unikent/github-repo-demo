import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBox } from "./SearchBox";
import { Provider } from "../provider";

describe("SearchBox Component", () => {
    it("calls setSearchBoxInput when input is typed and setQueryInput when button is clicked", () => {
        const mockSetSearchBoxInput = jest.fn();
        const mockSetQueryInput = jest.fn();
        const type = "users";

        render(
            <Provider>
                <SearchBox
                    searchBoxInput=""
                    setSearchBoxInput={mockSetSearchBoxInput}
                    setQueryInput={mockSetQueryInput}
                    type={type}
                />
            </Provider>
        );

        // Locate the input and button
        const inputElement = screen.getByPlaceholderText("Enter a github username");
        const buttonElement = screen.getByRole("button", { name: /search repos/i });

        // Simulate typing into the input
        fireEvent.change(inputElement, { target: { value: "test-user" } });

        // Assert setSearchBoxInput is called with the correct value
        expect(mockSetSearchBoxInput).toHaveBeenCalledWith("test-user");
        expect(mockSetSearchBoxInput).toHaveBeenCalledTimes(1);

        // Simulate clicking the button
        fireEvent.click(buttonElement);

        // Assert setQueryInput is called with the current input value
        expect(mockSetQueryInput).toHaveBeenCalledWith("test-user");
        expect(mockSetQueryInput).toHaveBeenCalledTimes(1);
    });
});
