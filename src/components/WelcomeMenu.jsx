import Button from "@mui/material/Button";

function WelcomeMenu(props) {
  return (
    <div className="welcome-menu-container">
      {props.navList.map((el, index) => {
        return (
          <Button
            className="hover-craft"
            key={index}
            href="#"
            sx={{
              color: "#2F2029",
              fontSize: "1.2rem",
              fontWeight: 400,
              textTransform: "none",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#1AFFE7",
              },
            }}
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
