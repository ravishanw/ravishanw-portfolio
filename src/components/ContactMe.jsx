import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";

function ContactMe() {
  return (
    <div>
      <Grid className="contact-me-container" container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="half-container">
            <SectionTitle sectionText="Contact me" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
}

export default ContactMe;
