import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import PinkGrid from "./PinkGrid";
import RaviAvatar from "../assets/Ravi_desaturated.jpg";

const frontEndSkills = [
  "JavaScript (ES6)",
  "React",
  "Vite",
  "Material UI",
  "Bootstrap 5",
  "JQuery 3",
  "Embedded JavaScript (EJS)",
  "Wordpress",
  "HTML 5",
  "CSS 3",
];

const backEndSkills = [
  "NodeJS",
  "ExpressJS",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "OAuth 2.0",
  "PassportJS",
  "Bcrypt",
  "REST API",
];

const toolSkills = [
  "Git",
  "GitHub",
  "Bash",
  "Microsoft Power Automate",
  "Microsoft Power Apps",
  "Microsoft Power BI",
];

const uiSkills = [
  "InDesign",
  "Figma",
  "PhotoShop",
  "Prototyping",
  "Wireframing",
];

function AboutMe(props) {
  return (
    <section id="about-me">
      <Grid className="about-me-container " container spacing={2}>
        <Grid item xs={12} md={6}>
          <div
            className={
              "padding-container " +
              (props.sectionVisible ? "lazy-load" : "invisible")
            }
          >
            <SectionTitle sectionText="About me" />
            <p>
              <span className="text-highlight">I love puzzles.</span> To me
              software development is about solving the puzzle of delivering
              functional user experiences, wrapped in responsive, inviting and
              accessible interfaces. This is why, with 2+ years of experience in
              visual design and UI/UX, I deepened my skills in the tech stack,
              putting all the pieces together.
            </p>
            <p>
              Now I am looking for my next opportunity to bring my knowledge of
              human centered design and development.
            </p>
            <p>These are some of the technologies I work with:</p>

            <Grid className="skills-container" container spacing={2}>
              <Grid item xs={3}>
                <h3 className="neon-line">Front End</h3>
                <ul>
                  {frontEndSkills.map((el, index) => {
                    return <li key={index}>{el}</li>;
                  })}
                </ul>
              </Grid>
              <Grid item xs={3}>
                <h3 className="neon-line">Back End</h3>
                <ul>
                  {backEndSkills.map((el, index) => {
                    return <li key={index}>{el}</li>;
                  })}
                </ul>
              </Grid>
              <Grid item xs={3}>
                <h3 className="neon-line">Tools</h3>
                <ul>
                  {toolSkills.map((el, index) => {
                    return <li key={index}>{el}</li>;
                  })}
                </ul>
              </Grid>
              <Grid item xs={3}>
                <h3 className="neon-line">UI/UX</h3>
                <ul>
                  {uiSkills.map((el, index) => {
                    return <li key={index}>{el}</li>;
                  })}
                </ul>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid
          className={
            "avatar-container " +
            (props.sectionVisible ? "lazy-load" : "invisible")
          }
          item
          xs={12}
          md={6}
        >
          <PinkGrid
            customClass="ravi-avatar"
            imgSrc={RaviAvatar}
            imgAlt="photo of Ravishan Wijemanne"
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default AboutMe;
