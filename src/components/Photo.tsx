const Photo = () => {
  return (
    <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] relative overflow-visible flex items-center justify-center">
      <div className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] relative">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="object-contain rounded-full"
        />
        <div className="absolute w-[340px] h-[340px] xl:w-[440px] xl:h-[440px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid theme-accent animate-pulse"></div>
      </div>
    </div>
  );
};

export default Photo;
