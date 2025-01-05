import { FiDownload } from "react-icons/fi";
import { user } from "../data";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Button from "../components/Button";
// import { Button } from "@/components/ui/button";
// import Socials from "@/components/Socials";
// import Photo from "@/components/Photo";
// import Stats from "@/components/Stats";
const Home = () => {
  const handleDownloadPdf = () => {
    console.log("Download CV ");
    console.log(user.resumeURL);

    try {
      const link = document.createElement("a");
      link.href = user.resumeURL;
      link.download = `Resume - ${user.fullName}.pdf`;
      link.click();
    } catch (error) {
      console.log("Error downloading resume", error);
    }
  };

  return (
    <section className="h-full">
      <div className=" flex flex-col xl:flex-row items-center justify-between gap-4 xl:pb-2">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">{user.designation}</span>
          <h1 className="mb-6 text-6xl">
            Hello I'm <br />
            <span className="theme-accent">{user.fullName}</span>
          </h1>
          <p className="max-w-[500px] mb-9 theme-text-secondary">{user.bio}</p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
              </Button> */}
            <Button
              onButtonClick={handleDownloadPdf}
              theme="theme-button-accent"
              btnText={
                <div className="flex gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </div>
              }
            ></Button>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="theme-button-accent w-9 h-9 border border-accent rounded-full flex justify-center items-center theme-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
