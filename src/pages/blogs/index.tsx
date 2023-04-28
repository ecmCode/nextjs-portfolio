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

const Blogs = ({posts}: Posts) => {
    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <div className="flex flex-col gap-4 items-center justify-between p-20">
                <h1>Blogs</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(blog => (
                            <li key={blog.id} className="bg-slate-200 dark:bg-slate-500/50 m-4 p-4 flex flex-col justify-between gap-4 shadow-lg">
                                <h2 className="text-2xl text-center overflow-ellipsis truncate">{blog.title}</h2>
                                <p className="font-bold text-right">#{blog.id}</p>
                                <p className="line-clamp-4 break-words">{blog.body}</p>
                                <div className="flex justify-end">
                                    <Link href={'/blogs/' + blog.id} className="text-cyan-600 dark:text-cyan-500 font-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
 
export default Blogs;