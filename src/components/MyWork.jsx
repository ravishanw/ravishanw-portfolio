import SectionTitle from "./SectionTitle";
import DiscoreImg from "../assets/discoreHome.png";
import MoodyBooksImg from "../assets/moodyBooksDesktop.jpg";
import ComveyImg from "../assets/ComveyHome.jpg";
import KheroonImg from "../assets/kheroonDesktop.jpg";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import HorizontalFluid from "../assets/horizontal-fluid.png";

const projectsArr = [
  {
    projectImg: DiscoreImg,
    projectImgAlt: "Desktop UI image of Discore App",
    projectTitle: "Discore",
    projectDesc:
      "This music review app uses the MusicBrainz API to pull artist information, storing user data in a PostgreSQL database.",
    projectTech: [
      "JavaScript",
      "NodeJS",
      "Express JS",
      "OAuth",
      "EJS",
      "PostgreSQL",
      "REST API",
    ],
    projectLink: "https://di-score.com",
  },
  {
    projectImg: MoodyBooksImg,
    projectImgAlt: "Desktop UI image of MoodyBooks app",
    projectTitle: "Moody Books",
    projectDesc:
      "JavaScript/NodeJS app gets book recommendations based on a mood selection, using the Penguin House API",
    projectTech: ["JavaScript", "NodeJS", "EJS", "Express JS", "REST API"],
    projectLink: "https://moody-books-production.up.railway.app",
  },
  {
    projectImg: KheroonImg,
    projectImgAlt: "Desktop UI image of Kheroon website",
    projectTitle: "Kheroon",
    projectDesc:
      "Fully responsive website built for Kheroon Jewelleries, using ReactJS, Vite and Material UI.",
    projectTech: ["ReactJS", "JavaScript", "Material UI", "HTML/CSS"],
    projectLink: "https://ravishanw.github.io/kheroon/",
  },
  {
    projectImg: ComveyImg,
    projectImgAlt: "Desktop UI image of the ComveyGroup website",
    projectTitle: "Comvey Group",
    projectDesc:
      "Commercial website for Comvey Group, using HTML, CSS, JavaScript. The newsletter sign-on app, built with Node JS, uses the Mailchimp API to sign-up users for a mailing list",
    projectTech: ["JavaScript", "HTML/CSS", "Bootstrap", "JQuery"],
    projectLink: "https://ravishanw.github.io/Comvey-site-dev/",
  },
];

function MyWork(props) {
  return (
    <section id="my-work">
      <div className="my-work-container">
        <div
          className={
            "padding-container " +
            (props.sectionVisible ? "lazy-load" : "invisible")
          }
        >
          <SectionTitle sectionText="My work" />

          <Grid className="cards-container" container spacing={3}>
            {projectsArr.map((el, index) => {
              return (
                <Grid key={index} item lg={3} md={6}>
                  <ProjectCard key={index} elArr={el} id={index} />
                </Grid>
              );
            })}
          </Grid>
          <img
            className={
              "horizontal-fluid " +
              (props.sectionVisible ? "slide-in" : "invisible")
            }
            src={HorizontalFluid}
            alt="neon fluid image"
          />
        </div>
        <div className="horizontal-grid"></div>
      </div>
    </section>
  );
}

export default MyWork;
