import Head from "next/head";
import Link from "next/link";

const Projects = () => {
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <h1>Projects</h1>
            <p>This is the Projects page</p>
            <Link href="/">Go back to the homepage</Link>
        </div>
    );
}
 
export default Projects;