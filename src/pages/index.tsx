import Head from "next/head";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
import HomeSubtitle from "./components/HomeSubtitle";
import HomeAboutme from "./components/HomeAboutme";
import HomeStacks from "./components/HomeStacks";
import BlogList from "./components/BlogList/BlogList";
import { usePosts } from "@/hooks/usePosts";

import type { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getData();
//   return {
//     props: {
//       posts: data.slice(0, 4),
//     },
//   };
// };

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="flex flex-col gap-4 items-center justify-between p-20">
        <HomeWelcome />
        <h2>Projects</h2>
        <h2>Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts && posts.map((post) => (
            <HomeBlogs 
              key={post.id} 
              id={post.id}
              title={post.title}
              body={post.body}
            />)
          )}
        </div>
      </main>
    </>
  )
}
