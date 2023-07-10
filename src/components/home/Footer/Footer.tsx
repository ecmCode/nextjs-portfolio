import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-6">
      © 2023 by{" "}
      <Link
        href="https://github.com/ecmCode"
        className="p-0 bg-transparent hover:brightness-110 text-cyan-400 underline underline-offset-2"
      >
        @ecmCode
      </Link>
      . All rights reserved.
    </div>
  );
};

export default Footer;
