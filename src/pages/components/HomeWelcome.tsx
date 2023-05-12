import Link from "next/link";

const HomeWelcome = () => {
    return (
        <div className="min-h-screen flex flex-col gap-4 justify-start items-center">
            <div className="py-4 flex flex-col gap-4">
                <h1 className="text-6xl">Portfolio</h1>
                <h2>A collection of my work.</h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-0">
                <p>
                    {`
                    I'm Lee, a self taught frontend developer since 2019. I specialize in responsive and user-friendly websites. Whether you're a small business or a large corporation, I'm here to help bring your vision to life. Feel free to explore my portfolio and contact me to discuss your project.
                    `}
                </p>
            </div>
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
    );
}
 
export default HomeWelcome;