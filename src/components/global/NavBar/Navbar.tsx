import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
const routes = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = ({
  darkmode,
  setDarkmode,
}: {
  darkmode: boolean | null;
  setDarkmode: React.Dispatch<SetStateAction<boolean | null>>;
}) => {
  const router = useRouter();
  return (
    <nav>
      <ul
        className='fixed w-full flex gap-10 justify-center items-center 
        py-4 px-8 backdrop-blur-md z-50 
        bg-slate-300/20 dark:bg-slate-700/20 
        ring-1 ring-slate-800/50 dark:ring-slate-200/50'
      >
        <li
        className="text-lg md:text-xl"
        >
            <Link
              href="/"
              className={
                router.pathname === '/'
                  ? "text-cyan-500 dark:text-cyan-500"
                  : "hover:text-cyan-500 dark:hover:text-cyan-500"
              }
            >
                Home
            </Link>
        </li>
        {routes.map((route) => (
          <li
            key={route.name.toLowerCase()}
            className="text-lg md:text-xl 
        
          "
          >
            <Link
              href={route.link}
              className={
                router.pathname.includes(route.link)
                  ? "text-cyan-500 dark:text-cyan-500"
                  : "hover:text-cyan-500 dark:hover:text-cyan-500"
              }
            >
              {route.name}
            </Link>
          </li>
        ))}
        <button
          onClick={() => setDarkmode((prev) => !prev)}
          className="text-2xl"
        >
          {darkmode ? (
            <BsMoonStars className="darkmode-icon" />
          ) : (
            <BsSun className="darkmode-icon" />
          )}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
