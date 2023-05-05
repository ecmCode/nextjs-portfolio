import { IPosts } from "@/types/interfaces";
import BlogPost from "./BlogPost";

const BlogContainer = ({posts}:IPosts) => {
    return ( 
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts && posts.map(blog => <BlogPost key={blog.id} blog={blog}/>)}
        </ul>
    );
}
 
export default BlogContainer;