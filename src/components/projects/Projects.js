import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFive,
  projectSix,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Custom social media platform replica developed with MERN stack, featuring user profiles, news feeds, interactions, and real-time updates for seamless user experience."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Mini-Store is an e-commerce web application that allows you to buy shoes & clothes online. It has a variety of categories, just visit the product listing page and you will see all the products, apply filters as per your need and in just a few clicks you can buy any products from the website."
          src={projectTwo}
        />
        <ProjectsCard
          title="Bhojan Thaal"
          des=" Food-Store is an e-commerce food web application that allows you to food online. It has a variety of categories, just visit the food listing page, trending food page or search page and you will see all the food available, apply sorting as per your need and in just a few clicks you can order food from the website."
          src={projectThree}
        />
        <ProjectsCard
          title="BookMyKothi"
          des="Full-stack real estate booking web app developed with MERN stack, featuring property listings, bookings, payments, and user authentication."
          src={projectFour}
        />
        <ProjectsCard
          title="weather App"
          des=" Redux and session storage store weather data, city search, geolocation, maps, sync updates, toast notifications, modal forecast, animations, responsive design."
          src={projectFive}
        />
        <ProjectsCard
          title="Task Master"
          des=" Full-stack task management app with user authentication via JWT, built with Next.js, Prisma, and MongoDB, enabling CRUD operations."
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
