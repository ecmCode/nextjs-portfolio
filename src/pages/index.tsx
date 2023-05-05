import Head from "next/head";
import HomeBlogs from "./components/HomeBlogs";
import HomeWelcome from "./components/HomeWelcome";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
import { getData } from "@/lib/getData";
import ScreenHeight from "./components/ScreenHeight";
import Container from "./components/Container";
import { IPosts } from "@/types/interfaces";
import HomeSubtitle from "./components/HomeSubtitle";

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
        <Container variant="full">
          <HomeSubtitle>Personal Life</HomeSubtitle>
          <Container variant="2/3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam, odit nam blanditiis, ex tempore fugiat repudiandae reiciendis cum molestiae sed possimus optio eos dolores asperiores harum recusandae cumque quam.</p>
          </Container>
          <HomeSubtitle>How I started Coding</HomeSubtitle>
          <Container variant="1/3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam, odit nam blanditiis, ex tempore fugiat repudiandae reiciendis cum molestiae sed possimus optio eos dolores asperiores harum recusandae cumque quam.</p>
          </Container>
          <HomeSubtitle>My Goal</HomeSubtitle>
          <Container variant="1/3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam, odit nam blanditiis, ex tempore fugiat repudiandae reiciendis cum molestiae sed possimus optio eos dolores asperiores harum recusandae cumque quam.</p>
          </Container>
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
        <Container variant="2/3">
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
        </Container>
        <HomeTitle>Contact Me</HomeTitle>
        {/* <ScreenHeight>
          <Container variant="1/3">
            hello world
          </Container>
          <Container variant="2/3">
            hello world
          </Container>
        </ScreenHeight> */}
      </main>
    </>
  )
}
