import Link from "next/link";
import Image from "next/image";
import img from "./assets/portal.png"

const HomeWelcome = () => {
    return (
            <div className="w-auto m-10 z-0">
                <h1 className="text-6xl md:text-7xl text-center z-20">Portfolio</h1>
                <div className="flex flex-col gap-4 lg:flex-row-reverse justify-between items-center mx-0 lg:mx-10">
                    <Image 
                    src={img} 
                    width={500} 
                    height={500} 
                    quality={100}
                    draggable={false}
                    alt={"Fantasy Portal"} 
                    className="relative -right-0 lg:right-6 -top-0 lg:top-20 scale-100 lg:scale-125 drop-shadow-xl z-10 brightness-100 hover:brightness-110 rounded-full transition duration-300 opacity-80 hover:opacity-100 cursor-pointer"
                    />
                    <div className="flex flex-col gap-6 justify-center items-center lg:items-start z-20 ">
                    
                    <h2>A collection of my work.</h2>
                    <p className="w-full md:w-3/4 flex flex-col items-end justify-center p-4 md:p-0 text-left">
                        {`
                        I'm Lee, a self taught frontend developer since 2019. I specialize in responsive and user-friendly websites. Whether you're a small business or a large corporation, I'm here to help bring your vision to life. Feel free to explore my portfolio and contact me to discuss your project.
                        `}
                    </p>
                    <div className="flex gap-10">
                        <Link href='/projects'>
                            <button className="px-6 py-2 bg-slate-500/20 rounded-sm">
                                Projects
                            </button>
                        </Link>
                        <Link href='#contact'>
                            <button className="px-6 py-2 bg-slate-500/20 rounded-sm">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
                
            
            </div>
    );
}
 
export default HomeWelcome;