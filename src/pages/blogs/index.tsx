import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    return {
        props: {
            posts: data
        }
    }
}

type Posts = {
    posts: Blog[]
}


const Blogs = ({posts}: Posts) => {
    return (
        <div className="p-10">
            <Head>
                <title>Blogs</title>
            </Head>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(blog => (
                        <li key={blog.id} className="bg-slate-500/50 m-4 p-4 flex flex-col justify-between gap-4">
                            <h2 className="text-2xl text-center overflow-ellipsis truncate">{blog.title}</h2>
                            <p className="font-bold text-right">#{blog.id}</p>
                            <p className="line-clamp-4 break-words">{blog.body}</p>
                            <div className="flex justify-end">
                                <Link href={'/blogs/' + blog.id} className="text-cyan-500 ">
                                    Read More
                                </Link>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
 
export default Blogs;