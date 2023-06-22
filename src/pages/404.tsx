import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/404");
  }, [router]);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main>
        <div className="flex gap-4 items-center justify-center select-none">
          <h1 className="border-r-4 pr-4">404</h1>
          <h2>Page Not Found.</h2>
        </div>
        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default NotFound;
