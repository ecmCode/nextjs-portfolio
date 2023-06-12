import { classes } from "@/utility/classes";

describe("classes", () => {
  it("should concatenate multiple tailwind module styles", () => {
    const result = classes("bg-red-500", "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });

  it("should ignore falsy arguments", () => {
    const result = classes("bg-red-500", " ", "text-white", " ", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });

  it("should handle empty arguments", () => {
    const result = classes();
    expect(result).toBe("");
  });

  it("should handle conditional styles", () => {
    const isActive = true;
    const result = classes("bg-red-500", isActive && "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });
});
