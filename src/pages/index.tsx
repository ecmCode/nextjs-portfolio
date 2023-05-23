import Head from "next/head";
import HomeWelcome from "./components/HomeWelcome";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
import { getData } from "@/lib/getData";
import { IPosts } from "@/types/interfaces";
import HomeSubtitle from "./components/HomeSubtitle";
import HomeAboutme from "./components/HomeAboutme";
import HomeStacks from "./components/HomeStacks";
import BlogList from "./components/BlogList/BlogList";

export const getStaticProps = async () => {
  const data = await getData()
  return {
      props : {
          posts: data.slice(0,4)
      }
  }
}

const Home = ({posts} : IPosts) => {

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <HomeWelcome />
        <HomeTitle>About Me</HomeTitle>
        <HomeAboutme/>
        <HomeTitle>Techs</HomeTitle>
        <HomeSubtitle>Stacks</HomeSubtitle>
        <HomeStacks/>
        <HomeSubtitle>Projects</HomeSubtitle>
        <HomeProjects />
        
        <BlogList posts={posts}/>
        <HomeTitle>Contact Me</HomeTitle>
        <div id="contact">
              Contact Me
        </div>
      </main>
    </>
  )
}

export default Home;