export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aryan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full Stack Developer
            </span>{" "}
          </h1>
          <p className="hero--section-description">
            My technical skills are Javascript, Typescript, React.js, Next.js,
            Nodejs, Expressjs, MongoDB.
          </p>
        </div>
       <a href="https://linkedin.com/in/sudodevop" target="_blank"><button className="btn btn-primary" >Get In Touch</button></a> 
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
