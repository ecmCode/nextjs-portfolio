import { projects } from "@/utility/projects";

describe("projects array", () => {
  it("exists with right length", () => {
    expect(projects).not.toBeUndefined();
    expect(projects).toBeInstanceOf(Array);
    expect(projects).toHaveLength(2);
  });

  it("has all needed properties", () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty("name");
      expect(project).toHaveProperty("desc");
      expect(project).toHaveProperty("imageURL");
      expect(project).toHaveProperty("codeURL");
      expect(project).toHaveProperty("demoURL");
    });
  });

  test("all urls match their regex patterns", () => {
    projects.forEach((project) => {
      expect(project.codeURL).toMatch(
        /https:\/\/github.com\/[-a-zA-Z]*\/[-a-zA-Z]*/i
      );
      expect(project.demoURL).toMatch(
        /https:\/\/[-a-zA-Z]*.github.io\/[-a-zA-Z]*/i
      );
    });
  });
});
