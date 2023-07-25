import Link from "next/link";

const Footer = () => {
  return (
    <p className="my-6 text-center">
      © 2023 by{" "}
      <Link href="https://github.com/ecmCode" className="btn btn-secondary">
        @ecmCode
      </Link>
      . All rights reserved.
    </p>
  );
};

export default Footer;
