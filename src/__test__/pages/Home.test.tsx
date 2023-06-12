import { cleanup, render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());

  it("should render the heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Portfolio/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
