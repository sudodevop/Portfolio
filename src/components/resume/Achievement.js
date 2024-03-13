import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Virtual Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SkyScanner"
            subTitle="Front-End Software Engineering ."
            result="Feb 2024"
            des="Executed a job simulation at Skyscanner, constructing a web app with React. Utilized Skyscanner’s Backpack React library for selecting travel dates. Customized the app and conducted automated tests for seamless rendering."
          />
          <ResumeCard
            title="Goldman Sachs"
            subTitle="Software Engineering"
            result="Feb 2024"
            des="In a Goldman Sachs job simulation, served as a governance analyst, assessing IT security and recommending enhancements. Identified outdated password hashing algorithm by cracking passwords. Drafted a memo proposing various improvements for bolstering password protection."
          />
          <ResumeCard
            title="Walmart USA"
            subTitle="Advanced Software Engineering"
            result="Mar 2024"
            des="In an Advanced Software Engineering Job Simulation at Walmart, tackled challenging technical projects. Innovated a Java heap data structure for the shipping department, demonstrating adept problem-solving. Crafted UML class diagrams for data processors and entity relationship diagrams for database design, meeting departmental needs."
          />
        </div>
      </div>
      </motion.div>
      // <div>
      //   <div className="py-12 font-titleFont flex flex-col gap-4">
      //     <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
      //     <h2 className="text-4xl font-bold">Job Experience</h2>
      //   </div>
      //   <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      //     {/* <ResumeCard
      //       title="Lorem ipsum dolor sit amet."
      //       subTitle="Lorem ipsum dolor sit amet alternative."
      //       result="Success"
      //       des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
      //     />
      //     <ResumeCard
      //       title="Lorem ipsum dolor sit amet."
      //       subTitle="Lorem ipsum dolor sit amet alternative."
      //       result="Success"
      //       des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
      //     /> */}
      //     <ResumeCard
      //       title="Lorem ipsum dolor sit amet."
      //       subTitle="Lorem ipsum dolor sit amet alternative."
      //       result="Success"
      //       des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
      //     />
      //   </div>
      // </div>

  );
};

export default Achievement;
