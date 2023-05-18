import Head from "next/head";
import Link from "next/link";
import aboutme from "./assets/aboutme.json";
import {BsInstagram, BsDiscord, BsGithub} from "react-icons/bs"
import {HiOutlineMail, HiPhone} from "react-icons/hi"
const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main>
                <h1>About Me</h1>
                <div className="flex flex-col gap-4">
                    {/* Contacts */}
                    <div>
                        <h4 className="flex gap-2 items-center">
                            <HiPhone/>012345678
                        </h4>
                        <h4 className="flex gap-2 items-center">
                            <HiOutlineMail/>example@example.com
                        </h4>
                    </div>
                    <div className="flex gap-10 text-3xl">
                        <BsGithub/>
                        <BsInstagram/>
                        <BsDiscord/>
                    </div>
                </div>
                <div 
                data-testid="paragraphs" 
                className="w-full md:w-4/5 lg:w-2/5 flex flex-col gap-10 p-10"
                >
                    {aboutme.map((p,index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
                <Link href="/">
                    Home
                </Link>
            </main>
        </>
    );
}
 
export default About;