import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";
import HomeWelcome from "./components/HomeWelcome";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";

export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  return {
      props: {
          posts: data.slice(0,4)
      }
  }
}

export default function Home({posts} : Posts) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="flex flex-col gap-4 items-center justify-between p-20">
        <HomeWelcome />
        <HomeTitle>Tech Stacks</HomeTitle>
        <HomeTitle>Projects</HomeTitle>
        <HomeProjects />
        <HomeTitle>Blogs</HomeTitle>
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
        <HomeTitle>Contact Me</HomeTitle>
      </main>
    </>
  )
}
