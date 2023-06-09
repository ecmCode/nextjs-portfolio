import Link from "next/link";

const NotFound = () => {
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
