import Nav from "./Nav";
import { Link } from "@tanstack/react-router";
import { user } from "../data";
import MobileNav from "./MobileNav";
import Button from "./Button";
import { FaSun, FaMoon } from "react-icons/fa";

import { FC } from "react";

interface HeaderProps {
  theme: string;
  handleTheme: () => void;
}

const Header: FC<HeaderProps> = ({ theme, handleTheme }) => {
  return (
    <header className="py-6 theme-bg shadow-md">
      <section className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            {user.firstName}
            <span className="theme-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href={`mailto:${user.email}`} className="relative group">
            <Button btnText="Hire Me" />
            <span className="absolute theme-accent -bottom-5 left-0 text-sm opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
              {user.email}
            </span>
          </a>
          <button onClick={handleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden ">
          <MobileNav theme={theme} handleTheme={handleTheme} />
        </div>
      </section>
    </header>
  );
};

export default Header;
