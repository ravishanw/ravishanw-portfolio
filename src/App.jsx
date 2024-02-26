import { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import FluidImg from "./assets/neon-fluid.png";
import Welcome from "./components/Welcome.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MyWork from "./components/MyWork.jsx";
import ContactMe from "./components/ContactMe.jsx";
import FloatingSocials from "./components/FloatingSocials.jsx";

const navItems = [
  {
    num: "01",
    item: "About me",
    navId: "#about-me",
  },
  {
    num: "02",
    item: "My work",
    navId: "#my-work",
  },
  {
    num: "03",
    item: "Contact me",
    navId: "#contact-me",
  },
  {
    num: "04",
    item: "Resume",
    navId: "#",
  },
];

const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/ravishan-wijemanne-85b9051bb/",
  gitHub: "https://github.com/ravishanw/",
};

function App() {
  // Refs for each section

  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  let refsArr = [welcomeRef, aboutRef, workRef, contactRef];

  // Visibility states for each section

  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  // Intersection Observer

  const intersectionOptions = {
    root: null,
    rootMargin: "-400px",
    threshold: 0,
  };
  console.log("aboutVisible =" + aboutVisible, "workVisible = " + workVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "welcome-ref") {
          setWelcomeVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        } else if (entry.isIntersecting && entry.target.id === "about-me-ref") {
          setAboutVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        } else if (entry.isIntersecting && entry.target.id === "work-ref") {
          setWorkVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        } else if (entry.isIntersecting && entry.target.id === "contact-ref") {
          setContactVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        }
      });
    }, intersectionOptions);
    refsArr.forEach((refs) => {
      observer.observe(refs.current);
    });
  }, [refsArr, intersectionOptions]);

  return (
    <div>
      <Navbar navList={navItems} />

      <div id="welcome-ref" ref={welcomeRef}>
        <Welcome
          fluidGraphic={FluidImg}
          navList={navItems}
          sectionVisible={welcomeVisible}
        />
      </div>
      <div id="about-me-ref" ref={aboutRef}>
        <AboutMe sectionVisible={aboutVisible} />
      </div>
      <div id="work-ref" ref={workRef}>
        <MyWork sectionVisible={workVisible} />
      </div>
      <div id="contact-ref" ref={contactRef}>
        <ContactMe
          fluidGraphic={FluidImg}
          navList={navItems}
          socialOb={socialLinks}
          sectionVisible={contactVisible}
        />
      </div>
      <FloatingSocials socialOb={socialLinks} />
    </div>
  );
}

export default App;
