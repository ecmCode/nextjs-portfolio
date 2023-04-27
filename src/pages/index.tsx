import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";
import HomeWelcome from "./components/HomeWelcome";

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
