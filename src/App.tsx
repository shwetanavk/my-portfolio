import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { user } from "./data";
import useLocalStorage from "./shared/useLocalStorage";
import { useEffect } from "react";

const App = () => {
  document.title = `Portfolio - ${user.fullName}`;
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="flex flex-col min-h-screen relative">
      <div className="sticky top-0 w-full z-50">
        <Header handleTheme={handleToggleTheme} theme={theme} />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
