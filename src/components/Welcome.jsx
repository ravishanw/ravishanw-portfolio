import Grid from "@mui/material/Grid";
import PinkGrid from "./PinkGrid";
import WelcomeMenu from "./WelcomeMenu";

function Welcome(props) {
  return (
    <Grid className="welcome-container" container spacing={2}>
      <Grid item xs={12} md={6}>
        <div
          className={
            "padding-container " +
            (props.sectionVisible ? "lazy-load" : "invisible")
          }
        >
          <p className="welcome-description">Hi, my name is</p>
          <h1 className="section-title">
            Ravishan <br />
            Wijemanne
          </h1>
          <p className="welcome-description">
            I am a full stack web developer & UI/UX designer creating elegant
            and accessible interfaces.
          </p>
          <p className="welcome-description">
            Also, you can just call me Ravi &#128522;
          </p>
          <div className="welcome-menu-separator"></div>
          <WelcomeMenu navList={props.navList} />
        </div>
      </Grid>
      <Grid
        className={props.sectionVisible ? "lazy-load" : "invisible"}
        item
        xs={12}
        md={6}
      >
        <PinkGrid
          customClass="neon-fluid"
          imgSrc={props.fluidGraphic}
          imgAlt="neon fluid graphic"
          imgDopple={true}
        />
      </Grid>
    </Grid>
  );
}

export default Welcome;
