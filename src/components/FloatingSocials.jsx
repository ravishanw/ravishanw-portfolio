import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

function FloatingSocials(props) {
  return (
    <div className="floating-socials">
      <Button
        href={props.socialOb.linkedIn}
        target="_blank"
        sx={{
          borderRadius: "5px 0 0 0",
          color: "#2F2029",
          "&:hover": {
            backgroundColor: "#00D0BC",
          },
        }}
      >
        <LinkedInIcon fontSize="medium" />
      </Button>
      <Divider />
      <Button
        href={props.socialOb.gitHub}
        target="_blank"
        sx={{
          borderRadius: "0 0 0 5px",
          color: "#2F2029",
          "&:hover": {
            backgroundColor: "#00D0BC",
          },
        }}
      >
        <GitHubIcon fontSize="medium" />
      </Button>
    </div>
  );
}

export default FloatingSocials;
