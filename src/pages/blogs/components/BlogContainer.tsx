import { IPosts } from "@/types/interfaces";
import BlogPost from "./BlogPost";

const BlogContainer = ({posts}:IPosts) => {
    return ( 
        <ul className="grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10">
            {posts && posts.map(blog => <BlogPost key={blog.id} blog={blog}/>)}
        </ul>
    );
}
 
export default BlogContainer;