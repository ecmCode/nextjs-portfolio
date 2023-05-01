import Link from "next/link";
import style from "./styles/BlogPost.module.css"

interface Props {
    blog: Blog
}

const BlogPost = ({blog}: Props) => {
    return ( 
        <li className={style.box}>
            <h2 className={style.title}>{blog.title}</h2>
            <p className={style.id}>#{blog.id}</p>
            <p className={style.body}>{blog.body}</p>
            <div className="flex justify-end">
                <Link href={'/blogs/' + blog.id} className={style.link}>
                    Read More
                </Link>
            </div>
        </li>
     );
}
 
export default BlogPost;