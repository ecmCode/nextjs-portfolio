import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
    const data : Blog[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    const paths = data.map(blog => {
        return {
            params: {
                id: blog.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context:{params:{id: string}}) => {
    const id = context.params.id;
    const data : Blog[] = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    // const post = data.find(post => post.id.toString() === id)

    return {
        props: {
            post: data
        }
    }
}

const Post = ({post}:{post: Blog}) => {
    return (
        <div className="p-10">
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1 className="text-center text-4xl">{post.title}</h1>
            <p className="p-10">{post.body}</p>
            <div className="flex gap-4 justify-end">
                <Link href="/blogs">
                    <p className="text-cyan-500 hover:brightness-125">
                        Go back to the blogs
                    </p>    
                </Link>
                <Link href="/">
                    <p className="underline hover:brightness-125">
                        Home
                    </p>
                </Link>
            </div>
        </div>
    );
}
 
export default Post;