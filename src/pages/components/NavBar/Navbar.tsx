import Link from "next/link";
import style from "./Navbar.module.css";
import { useRouter } from "next/router";

const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className={style.nav}>
        {routes.map((route) => (
          <li key={route.name.toLowerCase()}>
            <Link
              href={route.link}
              className={router.pathname === route.link ? "text-cyan-400" : ""}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={style.fade}></div>
    </nav>
  );
};

export default Navbar;
