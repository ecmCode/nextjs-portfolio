import { cleanup, render, screen } from "@testing-library/react";
import NotFound from "@/pages/404";
import "@testing-library/jest-dom";

describe("NotFound", () => {
  beforeEach(() => render(<NotFound />));
  afterEach(() => cleanup());

  it("renders every element", () => {
    const heading = screen.getByRole("heading", {
      name: /404/i,
    });

    const link = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
