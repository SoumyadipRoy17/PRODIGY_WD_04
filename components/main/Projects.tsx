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
          description="A website where you can book tours and travel to different places. It is a fully responsive website with a beautiful UI and UX. It is built using HTML, CSS, and JavaScript."
        />

        <ProjectCard
          src="/res/CardImage.png"
          title="Nike Landing Page"
          description="A Nike Landing Page made entirely with Tailwind CSS and React"
        />
        <ProjectCard
          src="/res/SpaceWebsite.png"
          title="Space Themed Portfolio Website"
          description="My Portfolio website made using Typescript, 3js and Next.js . "
        />
      </div>
    </div>
  );
};

export default Projects;
