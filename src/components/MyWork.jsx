import SectionTitle from "./SectionTitle";
import DiscoreImg from "../assets/discoreHome.png";
import MoodyBooksImg from "../assets/moodyBooksDesktop.jpg";
import ComveyImg from "../assets/ComveyHome.jpg";
import ProjectCard from "./ProjectCard";

const projectsArr = [
  {
    projectImg: DiscoreImg,
    projectTitle: "Discore",
    projectDesc:
      "This music review app uses the MusicBrainz API to pull artist information, storing user data in a PostgreSQL database. Templating is handled using Embedded JavaScript (EJS)",
    projectTech: ["JavaScript", "NodeJS", "EJS", "PostgreSQL"],
    projectLink: "https://peach-abalone-gear.cyclic.app/",
  },
  {
    projectImg: MoodyBooksImg,
    projectTitle: "Moody Books",
    projectDesc:
      "JavaScript/NodeJS app gets book recommendations based on a mood selection, using the Penguin House API",
    projectTech: ["JavaScript", "NodeJS", "EJS", "REST API"],
    projectLink: "https://fair-blue-harp-seal-slip.cyclic.cloud/",
  },
  {
    projectImg: ComveyImg,
    projectTitle: "Comvey Group",
    projectDesc:
      "Commercial website for Comvey Group, using HTML, CSS, JavaScript. The newsletter sign-on app, built with Node JS, uses the Mailchimp API to sign-up users for a mailing list",
    projectTech: ["JavaScript", "HTML/CSS", "Bootstrap", "JQuery"],
    projectLink: "https://ravishanw.github.io/Comvey-site-dev/",
  },
];

function MyWork() {
  return (
    <div className="my-work-container">
      <SectionTitle sectionText="My work" />
      <div className="cards-container">
        {projectsArr.map((el, index) => {
          return <ProjectCard key={index} elArr={el} id={index} />;
        })}
      </div>
    </div>
  );
}

export default MyWork;
