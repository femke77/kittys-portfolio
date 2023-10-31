import me from "../assets/me.png";

function About() {
  return (
    <div className="d-flex-l">
      <img src={me} />
      <div>
        <p className="mx-4">Hi I'm Kitty and this is my portfolio.</p>
      </div>
    </div>
  );
}

export default About;
