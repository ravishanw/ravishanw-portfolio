import Navbar from "./components/Navbar.jsx";
import FluidImg from "./assets/neon-fluid.png";
import Welcome from "./components/Welcome.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MyWork from "./components/MyWork.jsx";
import ContactMe from "./components/ContactMe.jsx";
import FloatingSocials from "./components/FloatingSocials.jsx";

function App() {
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

  return (
    <div>
      <Navbar navList={navItems} />
      <Welcome fluidGraphic={FluidImg} navList={navItems} />
      <AboutMe />
      <MyWork />
      <ContactMe fluidGraphic={FluidImg} navList={navItems} />
      <FloatingSocials />
    </div>
  );
}

export default App;
