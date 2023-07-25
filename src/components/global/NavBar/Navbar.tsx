import Link from "next/link";
// import style from "./Navbar.module.css";
import { useRouter } from "next/router";
import { SetStateAction } from "react";
import {BsSun,BsMoonStars} from 'react-icons/bs'
const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = ({darkmode,setDarkmode}: {darkmode:boolean,setDarkmode: React.Dispatch<SetStateAction<boolean>>}) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className='fixed w-full flex gap-10 justify-center items-center 
  py-4 px-8 backdrop-blur-md z-50 
  bg-slate-300/20 dark:bg-slate-700/30 ring-1 ring-slate-800/50 dark:ring-slate-200/50;'>
      
        {routes.map((route) => (
          <li key={route.name.toLowerCase()} className="text-lg md:text-xl 
        
          ">
              <Link
                href={route.link}
                className={router.pathname === route.link ? "text-cyan-500 dark:text-cyan-500" : "hover:text-cyan-500 dark:hover:text-cyan-500"}
              >
                {route.name}
              </Link>
          </li>
        ))}
        <button onClick={() => setDarkmode(prev => !prev)} className="text-2xl">
        {darkmode? <BsMoonStars className="darkmode-icon"/> : <BsSun className="darkmode-icon"/>}
      </button>
      </ul>
    </nav>
  );
};

export default Navbar;
