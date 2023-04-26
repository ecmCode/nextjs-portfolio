import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Head>
        <title>Portfolio</title>
      </Head>

      <h1 className="text-3xl">
        Portfolio
      </h1>
      <h2 className="text-xl">
        A collection of my work
      </h2>
      <div className="flex flex-col items-center justify-center">
        <Link href="/projects" className="btn btn-primary">
          Projects
        </Link>
        <Link href="/blogs" className="btn btn-primary">
          Blogs
        </Link>
      </div>
    
    </main>
  )
}
