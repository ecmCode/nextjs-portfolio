import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas accusamus dolor totam exercitationem beatae, quae placeat? Consectetur, laboriosam unde! Dolorum nihil nulla eum deleniti laborum, velit accusamus totam temporibus?
            </p>
            <Link href="/">Home</Link>
        </div>
    );
}
 
export default About;