import Link from "next/link";



const HomeBlogs = ({post}: Post) => {
    return (
        <div className="flex flex-col justify-between gap-6 p-2">
            <h3 className="truncate text-center">{post.title}</h3>
            <p className="line-clamp-4 break-words">
                {post.body}
            </p>
            <span className="text-right">
                <Link href={`/blogs/${post.id}`} className="bg-slate-900 px-4 py-2">
                    More
                </Link>
            </span>
        </div>
    );
}
 
export default HomeBlogs;