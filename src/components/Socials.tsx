import { user } from "../data";

const Socials = ({ containerStyles = "relative", iconStyles = "" }) => {
  return (
    <>
      <div className={containerStyles}>
        {user.socialsLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconStyles} relative group`}
            >
              {item.icon}
              <div className="absolute theme-accent -bottom-8 left-1/2 text-sm opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none -translate-x-1/2">
                {item.title}
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Socials;
