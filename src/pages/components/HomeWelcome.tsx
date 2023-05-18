import Link from "next/link";
import Image from "next/image";
import img from "./assets/portal.png"
import style from "./styles/HomeWelcome.module.css"

const Icon = () => {
    const size = 400;
    return (
        <Image 
        src={img} 
        width={size} 
        height={size} 
        quality={100}
        priority={true}
        draggable={false}
        alt="A fantasy portal icon" 
        className={style.icon}
        />
    )
}

const Article = () => {
    return (
        <>
            <h2>A collection of my work.</h2>
            <p className={style.paragraph}>
                {`
                I'm Lee, a self taught frontend developer since 2019. I specialize in responsive and user-friendly websites. Whether you're a small business or a large corporation, I'm here to help bring your vision to life. Feel free to explore my portfolio and contact me to discuss your project.
                `}
            </p>
        </>
    )
}

const Buttons = () => { 
    return (
        <div className="flex gap-10" data-testid="buttons">
            <Link href='/projects'>
                Projects
            </Link>
            <Link href='#contact' className="bg-cyan-400/20">
                Contact
            </Link>
        </div>
    )
}

const HomeWelcome = () => {
    return (
        <div className="w-auto z-0 mb-10 lg:mb-0">
            <h1 className={style.title}>Portfolio</h1>
            <div className={style.wrapper}>
                <Icon data-testid="icon"/>
                <div className={style.content}>
                    <Article/>
                    <Buttons/>
                </div>
            </div>
        </div>
    );
}
 
export default HomeWelcome;