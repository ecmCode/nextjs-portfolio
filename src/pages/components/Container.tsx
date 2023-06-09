import { classes } from "@/utility/classes";
import { ContainerType } from "@/types/ContainerType";

const Container = ({ variant, children }: ContainerType) => {
  const option = () => {
    switch (variant) {
      case "1/3":
        return "min-h-[33vh]";
      case "2/3":
        return "min-h-[66vh]";
      case "full":
        return "h-full";
      default:
        /**
         * Exhaustive check making sure all options are listed.
         * It should throw a compiler error if an option is missing
         */
        const _exhaustiveCheck: never = variant;
        return _exhaustiveCheck;
    }
  };

  return (
    <div className="w-full">
      <div className={classes(option(), " h-full flex items-start")}>
        <div className="p-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Container;
