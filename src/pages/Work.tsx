import { useState } from "react";
import { projects } from "../data";
import {
  BsArrowUpRight,
  BsChevronLeft,
  BsChevronRight,
  BsGithub,
} from "react-icons/bs";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleRightSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentSlide];

  return (
    <section className="flex flex-col py-4">
      <div className="flex flex-col xl:flex-row gap-10 items-centern">
        <div className="w-full xl:w-[50%] h-full flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-8 group">
              <div className="text-8xl leading-none font-extrabold text-outline group-hover:text-outline-hover">
                {project.num}
              </div>
              <h1 className="text-3xl font-bold leading-none transition-all duration-500 capitalize group-hover:theme-text-accent">
                {project.title} - {project.category} project
              </h1>
              <p className="theme-text-secondary">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl theme-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="theme-gray-border"></div>
            </div>
            <div className="flex items-center gap-4">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full theme-bg-gray flex justify-center items-center group relative">
                  <BsArrowUpRight className="theme-text text-3xl group-hover:text-accent" />
                  <div className="w-40 text-center absolute -top-10 left-1/2 transform -translate-x-1/2 mt-2 p-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity capitalize">
                    Live Project
                  </div>
                </div>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 rounded-full theme-bg-gray flex justify-center items-center group relative">
                  <BsGithub className="theme-text text-3xl group-hover:text-accent" />
                  <div className="w-40 text-center absolute -top-10 left-1/2 transform -translate-x-1/2 mt-2 p-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity capitalize">
                    GitHub Repo
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="md:h-[450px] xl:h-[500px] flex justify-center items-center">
          <div className="relative">
            <div
              className="theme-bg-accent theme-text-primary h-12 w-12 absolute bottom-1/2 
          xl:-bottom-16 xl:right-16 p-1 text-6xl translate-y-1/2 xl:translate-y-0"
            >
              <BsChevronLeft className="h-10 w-10" onClick={handleLeftSlide} />
            </div>
            <img
              src={project.image}
              alt=""
              className="w-[380px] h-[250px] md:w-[550px] md:h-[350px] object-cover rounded-lg shadow-sm shadow-gray-200"
            />
            <div className="theme-bg-accent theme-text-primary h-12 w-12 absolute bottom-1/2 xl:-bottom-16 right-0 p-1 text-6xl translate-y-1/2 xl:translate-y-0">
              <BsChevronRight
                className="h-10 w-10"
                onClick={handleRightSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
