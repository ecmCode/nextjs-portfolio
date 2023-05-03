import Link from "next/link";

const HomeWelcome = () => {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center">
            <div className="py-10 flex flex-col gap-4">
                <h1 className="text-6xl">Portfolio</h1>
                <h2>A collection of my work.</h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-0">
                <p>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Optio mollitia sunt 
                    corporis, sapiente debitis odio qui, 
                    tenetur velit pariatur inventore odit 
                    itaque eius assumenda rerum 
                    libero maiores est. Rem, numquam?
                </p>
            </div>
            <Link href='/projects'>
                <button className="px-10 py-4 my-10 bg-slate-500/20 rounded-lg">
                    Projects
                </button>
            </Link>
        </div>
    );
}
 
export default HomeWelcome;