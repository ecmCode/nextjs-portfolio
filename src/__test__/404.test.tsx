/**
 * @jest-environment jsdom
 */

import NotFound from "../pages/404"
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"

describe("NotFound page", () => {
    it("renders the page", () => {
        const {container} = render(<NotFound/>)
        expect(container).toBeInTheDocument()
    })
    it("is not null", () => {
        const {container} = render(<NotFound/>)
        expect(container).not.toBeNull()
    })
}) 