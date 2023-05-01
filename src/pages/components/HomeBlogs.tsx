import Link from "next/link";



const HomeBlogs = ({id,title,body}: Blog ) => {
    return (
        <div className="flex flex-col justify-between gap-6 p-2">
            <h3 className="truncate text-center">{title}</h3>
            <p className="line-clamp-4 break-words">
                {body}
            </p>
            <span className="text-right">
                <Link href={`/blogs/${id}`} className="px-4 py-2 bg-slate-200 dark:bg-slate-900">
                    More
                </Link>
            </span>
        </div>
    );
}
 
export default HomeBlogs;