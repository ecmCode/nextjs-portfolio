import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404');
  }, [router]);

  return (
    <main>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Home</Link>
      <br />
    </main>
  );
};


export default NotFound;
