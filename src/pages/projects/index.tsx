import Head from "next/head";
import Link from "next/link";

const Projects = () => {
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <main className="flex flex-col gap-10 items-center justify-between p-20">
                <h1>Projects</h1>
                <p>This is the Projects page</p>
                <Link href="/">Home</Link>
            </main>
        </div>
    );
}
 
export default Projects;