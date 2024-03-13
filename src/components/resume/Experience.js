import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Freelance - (Aug 2023 - Present)"
            result="Remote, Pune"
            des="Utilized React.js to develop a user-friendly dashboard, integrating Restful APIs for efficient data extraction across diverse sectors like restaurants, school portfolios, institutes, and healthcare diagnostics. Additionally, revamped a vCard Maker Website with React, JavaScript, and Bootstrap, optimizing code and ensuring user satisfaction. Proficient in React.js, Redux, Bootstrap, RESTful API, Node.js, Express.js and MongoDB."
          />
          <ResumeCard
            title="Web Developer (Part Time)"
            subTitle="Fiverr- (Jan 2022 - June 2023)"
            result="Remote, IN"
            des="Crafted captivating landing pages and e-commerce sites with Elementor, Shopify, and WooCommerce, enhancing online shopping experiences. Employed React.js and JavaScript to build frontend features, including sorting, filtering, and cart functionality. Proficient in React.js, Redux, Bootstrap, WordPress, Shopify, Elementor, and SEO."
          />
          <ResumeCard
            title="HTML Developer (Part Time)"
            subTitle="Freelancer.com - (May 2020 - Dec 2021)"
            result="Remote, IN"
            des="Designed and developed more than 10 websites for Gym Portfolio, Sales Funnels, and induvidual portfolio websites for photographers and restaurants using HTMl, CSS, Bootstrap and Javascript."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
