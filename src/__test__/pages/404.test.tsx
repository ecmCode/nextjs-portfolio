import { cleanup, render, screen } from "@testing-library/react";
import NotFound from "@/pages/404";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

describe("NotFound", () => {
  beforeEach(() => {
    jest.mock("next/router", () => mockRouter);
    // Simulate the URL that doesn't exist
    mockRouter.push("/non-existing-url");
    render(
      <MemoryRouterProvider>
        <NotFound />
      </MemoryRouterProvider>
    );
  });
  afterEach(() => cleanup());

  it("redirects to /404", () => {
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found.")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
  });

  it("redirects to /404 when URL does not exist", () => {
    // Assert that the redirection to /404 occurred
    expect(mockRouter.pathname).toBe("/404");

    // Assert the rendered content on the /404 page
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found.")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
  });
});
