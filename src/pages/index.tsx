import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";
import HomeWelcome from "./components/HomeWelcome";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
import { getData } from "@/lib/getData";
import ScreenHeight from "./components/ScreenHeight";
import Container from "./components/Container";
import { Posts } from "@/types/types";

export const getStaticProps = async () => {
  const data = await getData()
  return {
      props : {
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
      <main>
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
        <ScreenHeight>
          <Container variant="1/3">
            hello world
          </Container>
        </ScreenHeight>
      </main>
    </>
  )
}
