import Head from "next/head";
import Link from "next/link";

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main>
                <h1>About</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas accusamus dolor totam exercitationem beatae, quae placeat? Consectetur, laboriosam unde! Dolorum nihil nulla eum deleniti laborum, velit accusamus totam temporibus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium sit, quam, omnis laudantium et cum libero dolore deleniti nisi, corrupti molestiae quis mollitia. Libero cupiditate repellendus laborum delectus impedit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum temporibus, doloribus, atque nulla modi accusamus commodi mollitia explicabo natus deserunt sit ad. Odio explicabo eaque sequi! Veritatis, tempora aperiam?
                    </p>
                </div>
                <Link href="/">Home</Link>
            </main>
        </>
    );
}
 
export default About;