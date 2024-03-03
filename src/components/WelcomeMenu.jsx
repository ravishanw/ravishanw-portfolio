import Button from "@mui/material/Button";

function WelcomeMenu(props) {
  return (
    <div className="welcome-menu-container">
      {props.navList.map((el, index) => {
        return (
          <Button
            className="hover-craft"
            key={index}
            href={el.navId}
            target={el.targetBlank ? "_blank" : ""}
            sx={{
              color: "#2F2029",
              fontSize: "1rem",
              fontWeight: 400,
              justifyContent: "flex-start",
              marginBottom: "10px",
              textTransform: "none",

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
