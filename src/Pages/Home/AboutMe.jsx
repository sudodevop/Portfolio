export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a skilled Full Stack Developer with a Bachelor's degree in BCA(Software Engineering). 
          </p>
          <p className="hero--section-description">
          My technical skills include Javascript, Typescript, React.js, Redux, Next.js, Svelte, Bootstrap TailwindCss, Material UI, Framer Motion, Rechart.js, Jest, Nodejs, ExpressJs, MongoDB
          </p>
        </div>
      </div>
    </section>
  );
}
