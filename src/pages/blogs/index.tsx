import Head from "next/head";
import BlogContainer from "./components/BlogContainer";
import { getData } from "@/lib/getData";
import { IPosts } from "@/types/interfaces";

export const getStaticProps = async () => {
    const data = await getData()
    return {
        props: {
            posts: data
        }
    }
}

const Blogs = ({posts}: IPosts) => {
    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <main>
                <h1>Blogs</h1>
                <BlogContainer posts={posts}/>
            </main>
        </>
    );
}
 
export default Blogs;