import me from "../assets/me.png";

function About() {
  return (
    <div className="d-flex-l">
   <img src={me} /> 
      <div className="about mx-4">Hi I'm Kitty and this is my portfolio. I love to code, and I've been coding for many years. I know I don't look that old, but I'm paw-somely ageless.
      I love to code projects for my fellow kitties, so check out my work in the portfolio section.
      </div>
    </div>
  );
}

export default About;
