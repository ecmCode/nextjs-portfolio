import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";

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
        <h1>Portfolio</h1>
        <h2>A collection of my work.</h2>
        <div className="flex flex-col items-center justify-center">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia sunt corporis, sapiente debitis odio qui, tenetur velit pariatur inventore odit itaque eius assumenda rerum libero maiores est. Rem, numquam?</p>
        </div>
        <h2>Projects</h2>
        <h2>Blogs</h2>
        <div className="grid grid-cols-4 gap-4">
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
