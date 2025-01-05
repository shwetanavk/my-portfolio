import { FC, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { links, user } from "../data";
import { Link, useLocation } from "@tanstack/react-router";
import { FaSun, FaMoon } from "react-icons/fa";

interface MobileNavProps {
  theme: string;
  handleTheme: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ theme, handleTheme }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex justify-center items-center z-50"
        aria-label="Open Menu"
      >
        <CiMenuFries className="text-4xl theme-accent" />
      </button>

      {/* Sidebar/Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full theme-bg shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Header and links */}
        <div className="flex justify-between items-center px-8 py-8">
          <button
            onClick={() => {
              handleTheme();
              toggleMenu();
            }}
            className="text-2xl"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={toggleMenu} aria-label="Close Menu">
            <AiOutlineClose className="text-3xl theme-accent" />
          </button>
        </div>
        <div className="w-full text-center pt-4">
          <Link href="/" onClick={toggleMenu}>
            <h2>
              {user.firstName}
              <span className="theme-accent">.</span>
            </h2>
          </Link>
          <h4 className="theme-text-secondary p-4">{user.designation}</h4>
        </div>
        <nav className="flex flex-col items-center gap-6 px-6 py-14">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={toggleMenu}
              className={`${
                link.path === pathname && "theme-accent border-b-2  "
              } capitalize font-medium transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-70 z-30"
        />
      )}
    </>
  );
};

export default MobileNav;
