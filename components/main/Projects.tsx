import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/res/NextWebsite.png"
          title="Natours Tours & Travels Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos quo commodi ipsam? Cupiditate, dolore reprehenderit."
        />

        <ProjectCard
          src="/res/CardImage.png"
          title="Interactive Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos quo commodi ipsam? Cupiditate, dolore reprehenderit."
        />
        <ProjectCard
          src="/res/SpaceWebsite.png"
          title="Space Themed Portfolio Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos quo commodi ipsam? Cupiditate, dolore reprehenderit."
        />
      </div>
    </div>
  );
};

export default Projects;
