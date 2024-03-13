import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aryan Anshuman</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Results-oriented Full Stack Developer with 1 year of expertise in
          software development.Skilled in HTML, CSS, JavaScript, React.js,
          Next.js, Typescript Node.js, Express.js, MongoDB, Linux, Git &
          GitHub.Committed to staying updated with the latest industry
          trends.Ready to contribute technical proficiency and problem-solving
          skills to dynamic development projects
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+918235989567</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sudodevop@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.github.com/sudodevop" target="_blank">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.twitter.com/sudodevop" target="_blank">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sudodevop" target="_blank">
              <FaLinkedinIn />{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
