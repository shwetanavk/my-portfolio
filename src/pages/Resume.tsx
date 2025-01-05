import { useState } from "react";
import { user, experience, eduction, skills, about, phoneRegex } from "../data";

const Resume = () => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(0);

  const tab = ["Experience", "Education", "Skills", "About"];
  const tabContent = [
    <Experience key="experience" />,
    <Education key="education" />,
    <Skills key="skills" />,
    <About key="about" />,
  ];

  return (
    <section className="py-10 flex flex-col xl:flex-row gap-28 xl:gap-16 items-center xl:items-start">
      <div className="flex flex-col gap-6 w-96 flex-shrink-0 text-center">
        <h1>Why hire me?</h1>
        {user?.hireme?.length > 0 ? (
          <h4 className="mb-8 text-sm text-start">{user.hireme}</h4>
        ) : null}
        {tab.map((item, index) => {
          return (
            <div
              onClick={() => setCurrentSelectedTab(index)}
              className={`${currentSelectedTab === index ? "theme-button" : "theme-tab-gray"} p-2 rounded-lg`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex-grow">{tabContent[currentSelectedTab]}</div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="flex flex-col gap-8 text-center xl:text-left">
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
      <div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="theme-tab-gray max-w-96 p-10 rounded-xl flex flex-col justify-center
                          items-center lg:items-start gap-1"
              >
                <span className="theme-accent">{item.duration}</span>
                <h3 className="text-xl text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3 ">
                  <span className="w-2 h-2 flex-shrink-0 rounded-full theme-bg-accent"></span>
                  <p className="theme-text-secondary">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="flex flex-col gap-8 text-center xl:text-left">
      <h1>{eduction.title}</h1>
      <p>{eduction.description}</p>
      <div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eduction.items.map((item, index) => {
            return (
              <li
                key={index}
                className="theme-tab-gray max-w-96 p-10 rounded-xl flex flex-col justify-center
                          items-center lg:items-start gap-1"
              >
                <span className="theme-accent">{item.duration}</span>
                <h3 className="text-xl text-center lg:text-left">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-3 ">
                  <span className="w-2 h-2 flex-shrink-0 rounded-full theme-bg-accent"></span>
                  <p className="theme-text-secondary">{item.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="flex flex-col gap-8 text-center xl:text-left">
      <h1>{skills.title}</h1>
      <p>{skills.description}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8 items-center justify-center">
        {skills.skillList.map((item, index) => {
          return (
            <li key={index} className="w-full flex justify-center">
              <div className="relative group flex justify-center items-center">
                <div className="theme-tab-gray theme-accent w-40 h-40 text-6xl rounded-xl flex justify-center items-center group">
                  <div className="group-hover:theme-accent transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="w-40 text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 p-2 text-sm rounded-lg opacity-100    transition-opacity capitalize">
                    {item.name}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const About = () => {
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus("Phone number copied!");
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch(() => {
        setCopyStatus("Failed to copy");
      });
  };

  return (
    <section className="flex flex-col gap-8 text-center xl:text-left">
      <h1>{about.title}</h1>
      <p>{about.description}</p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 xl:gap-y-6 gap-20">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-center items-center xl:justify-start gap-4"
            >
              <span className="theme-text-secondary">{item.fieldName}</span>
              {/* <span className="text-lg">{item.fieldValue}</span> */}

              <div>
                {item.fieldValue.includes("@") ? (
                  <a
                    href={`mailto:${item.fieldValue}`}
                    className="hover:underline"
                  >
                    {item.fieldValue}
                  </a>
                ) : item.fieldValue.match(phoneRegex) ? (
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => {
                      handleCopy(item.fieldValue);
                    }}
                  >
                    {item.fieldValue}
                  </span>
                ) : (
                  item.fieldValue
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <p className="theme-accent text-sm mt-1 h-4">{copyStatus}</p>
    </section>
  );
};

export default Resume;
