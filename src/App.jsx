import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MyWork from "./components/MyWork.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  const navItems = [
    {
      num: "01",
      item: "About me",
    },
    {
      num: "02",
      item: "My work",
    },
    {
      num: "03",
      item: "Contact me",
    },
    {
      num: "04",
      item: "Resume",
    },
  ];

  return (
    <div>
      <Navbar navList={navItems} />
      <Welcome navList={navItems} />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
