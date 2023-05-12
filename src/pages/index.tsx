import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";
import HomeWelcome from "./components/HomeWelcome";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
import { getData } from "@/lib/getData";
import Container from "./components/Container";
import { IPosts } from "@/types/interfaces";
import HomeSubtitle from "./components/HomeSubtitle";
import Link from "next/link";
import aboutme from "./about/assets/aboutme.json"

export const getStaticProps = async () => {
  const data = await getData()
  return {
      props : {
          posts: data.slice(0,4)
      }
  }
}

export default function Home({posts} : IPosts) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <HomeWelcome />
        <HomeTitle>About Me</HomeTitle>
        <Container variant="1/3">
          <div className="px-10 md:px-40 py-10 flex flex-col gap-6">
            {
              aboutme && aboutme
              .slice(0,3).map((p,index) => <p key={index}>{p}</p> )
            }
            <div className="text-right">
              <Link href="/about/" className="bg-slate-500/20 rounded-sm py-2 px-6">
                Read More
              </Link>
            </div>
          </div>
        </Container>
        <HomeTitle>Techs</HomeTitle>
        <HomeSubtitle>Stacks</HomeSubtitle>
        <Container variant="1/3">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>React</p>
          </Container>
        <HomeSubtitle>Projects</HomeSubtitle>
        <Container variant="1/3">
          <HomeProjects />
        </Container>
        <HomeTitle>Blogs</HomeTitle>
        <Container variant="1/3">
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
          <div className="text-center mt-10">
            <Link href='/blogs/' className="bg-slate-500/20 rounded-sm py-2 px-6">
              All Blogs
            </Link>
          </div>
        </Container>
        <HomeTitle>Contact Me</HomeTitle>
        <div id="contact">
              Contact Me
        </div>
      </main>
    </>
  )
}
