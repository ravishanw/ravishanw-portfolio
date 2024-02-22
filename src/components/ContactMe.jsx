import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SlantedGrid from "./SlantedGrid";
import FooterLinks from "./FooterLinks";
import Divider from "@mui/material/Divider";

const currentYear = new Date().getFullYear();

function ContactMe(props) {
  return (
    <section id="contact-me">
      <Grid className="contact-me-container" container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="padding-container">
            <SectionTitle sectionText="Contact me" />
            <p className="contact-me-description">
              Want to co-create spectacular interfaces, have any questions, or
              talk pop art?
              <br /> (Seriously, if you’ll let me, I can talk for hours about
              the continuum that connects Kafka to Giger to Meshuggah)
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
                  border: "1px solid transparent",
                  boxShadow: "4px 4px #fff",
                  color: "#2F2029",
                },
              }}
            >
              Just send a message!
            </Button>
            <div className="socials-container">
              <a href="https://github.com/ravishanw/" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
              <a href="">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
            <FooterLinks navList={props.navList} />
            <Divider sx={{ bgcolor: "#fff", margin: "20px 0", opacity: 0.5 }} />
            <p className="copyright">
              Copyright &#169; Ravishan Wijemanne {currentYear}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="padding-container">
            <div className="credits-container">
              <div className="credits-top">
                <p>
                  Designed and coded by <br /> Ravishan Wijemanne
                </p>
              </div>
              <SlantedGrid fluidGraphic={props.fluidGraphic} />
              <div className="credits-bottom">
                <p>Built using React JS, Vite and MaterialUI</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default ContactMe;
