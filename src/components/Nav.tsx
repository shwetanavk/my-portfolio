import { Link, useLocation } from "@tanstack/react-router";
import { links } from "../data";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "theme-accent border-b-2"
            } capitalize font-medium  transition-all hover:text-[var(--accent-hover)]`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
