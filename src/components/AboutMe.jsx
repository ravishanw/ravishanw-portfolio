import Grid from "@mui/material/Grid";

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

function AboutMe() {
  return (
    <Grid className="about-me-container" container spacing={2}>
      <Grid item xs={12} md={6}>
        <h2>About me</h2>
        <p>
          I love puzzles. To me software development is about solving the puzzle
          of delivering functional user experiences, wrapped in responsive,
          inviting and accessible interfaces. This is why, with 2+ years of
          experience in visual design and UI/UX, I deepened my skills in the
          tech stack, putting all the pieces together.
        </p>
        <p>
          Now I am looking for my next opportunity to bring my knowledge of
          human centered design and development.
        </p>
        <p>These are some of the technologies I work with:</p>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h3>Front End</h3>
            <ul>
              {frontEndSkills.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <h3>Back End</h3>
            <ul>
              {backEndSkills.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <h3>Tools</h3>
            <ul>
              {toolSkills.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <h3>UI/UX</h3>
            <ul>
              {uiSkills.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Testing column 2</p>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
