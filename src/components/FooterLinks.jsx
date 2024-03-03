import Button from "@mui/material/Button";

function FooterLinks(props) {
  return (
    <div className="footer-links-container">
      {props.navList.map((el, index) => {
        return (
          <Button
            className="footer-button"
            key={index}
            href={el.navId}
            target={el.targetBlank ? "_blank" : ""}
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 400,
              justifyContent: "flex-start",
              marginBottom: "10px",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "#1AFFE7",
                boxShadow: "4px 4px #fff",
                color: "#2F2029",
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

export default FooterLinks;
