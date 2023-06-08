import HomeWelcome from "@/pages/components/WelcomePage/WelcomePage";
import { cleanup, screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("HomeWelcome", () => {
    beforeEach(() => render(<HomeWelcome/>))
    afterEach(() => cleanup())

    describe("Buttons", () => {
        test("all elements should be rendered correctly", () => {
            const buttons = screen.getByTestId("buttons")
            expect(buttons).toBeInTheDocument()
            expect(buttons.children).toHaveLength(2)
            expect(buttons.children[0].localName).toEqual("a")
            expect(buttons.children[1].localName).toEqual("a")
        })
    });
})