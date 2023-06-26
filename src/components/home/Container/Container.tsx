import { classes } from "@/utility/classes";
import type { ContainerType } from "@/types/ContainerType";

const Container = ({ variant, children }: ContainerType) => {
  const option = () => {
    switch (variant) {
      case "1/3":
        return "min-h-[33vh]";
      case "2/3":
        return "min-h-[66vh]";
      case "full":
        return "min-h-full";
      default:
        // Exhaustive check making sure all options are listed.
        // It should throw a compiler error if an option is missing.
        const _exhaustiveCheck: never = variant;
        return _exhaustiveCheck;
    }
  };

  return (
    <div className="w-full">
      <div className={classes(option(), "h-full flex")}>
        <div className="p-4 w-full h-full flex flex-col self-center">{children}</div>
      </div>
    </div>
  );
};

export default Container;
