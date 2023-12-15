import me from "../assets/me.png";

function About() {
  return (
    <div className="d-flex-l">
      <img className="a-img" src={me} />
      <div className="about mx-4 my-4">
        Hi I'm Kitty and this is my portfolio. I love to code, and I've been
        coding for many years. I know I don't look that old, but I'm paw-somely
        ageless. I love to code projects for my fellow kitties, so check out my
        work in the portfolio section.
          <br></br>
          <br></br>
        Exciting update: This portfolio is now a PWA application! The entire app 
        will pre-cache, work offline, is installable and is overall more amazing than ever!
        Check out my service worker, my cache, and see how I work offline with your chrome
        dev tools!
       </div>
         <p className="about mx-4 my-4">
       
      </p>
   
     
    </div>
  );
}

export default About;
