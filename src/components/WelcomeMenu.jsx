import Button from "@mui/material/Button";

function WelcomeMenu(props) {
  function addEffect(e) {
    e.target.classList.add("link-hover");
  }

  function removeEffect(e) {
    e.target.classList.remove("link-hover");
  }
  return (
    <div className="welcome-menu-container">
      {props.navList.map((el, index) => {
        return (
          <Button
            square
            key={index}
            href="#"
            sx={{
              color: "#2F2029",
              fontSize: "1.2rem",
              fontWeight: 400,
              textTransform: "none",
              justifyContent: "flex-start",
            }}
            onMouseOver={addEffect}
            onMouseOut={removeEffect}
          >
            <span className="nav-num">{el.num}</span>
            {el.item}
          </Button>
        );
      })}
    </div>
  );
}

export default WelcomeMenu;
