import { cleanup, render } from "@testing-library/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Home from "@/pages/index";
import NotFound from "@/pages/404";
import BlogPage from "@/pages/blogs";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import React from "react";

describe("snapshot", () => {
  afterEach(() => cleanup());

  // it("renders Home page unchanged", () => {
  //   const { container } = render(<Home posts={[]} error={""} />);
  //   expect(container).toMatchSnapshot();
  // });

  it("renders 404 page unchanged", () => {
    const { container } = render(
      <MemoryRouterProvider>
        <NotFound />
      </MemoryRouterProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders About page unchanged", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it("renders Projects page unchanged", () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });

  // it("renders Blogs page unchanged", () => {
  //   const { container } = render(
  //     <MemoryRouterProvider>
  //       <BlogPage posts={[]} error={""} />
  //     </MemoryRouterProvider>
  //   );
  //   expect(container).toMatchSnapshot();
  // });
});
