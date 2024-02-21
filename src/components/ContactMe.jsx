import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SlantedGrid from "./SlantedGrid";

function ContactMe(props) {
  return (
    <section id="contact-me">
      <Grid className="contact-me-container" container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="padding-container">
            <SectionTitle sectionText="Contact me" />
            <p>
              Want to co-create spectacular interfaces, have any questions, or
              talk pop art? (Seriously, if you’ll let me, I can talk for hours
              about the continuum that connects Kafka to Giger to Meshuggah)
            </p>
            <Button
              href="mailto:ravishansays@gmail.com"
              target="_blank"
              sx={{
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 400,
                textTransform: "none",
                justifyContent: "flex-start",
                "&:hover": {
                  backgroundColor: "#1AFFE7",
                  border: "none",
                  boxShadow: "4px 4px #fff",
                  color: "#2F2029",
                },
              }}
            >
              Just send a message!
            </Button>
            <div className="socials-container">
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <SlantedGrid fluidGraphic={props.fluidGraphic} />
        </Grid>
      </Grid>
    </section>
  );
}

export default ContactMe;
