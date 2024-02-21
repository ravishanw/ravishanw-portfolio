import Grid from "@mui/material/Grid";
import PinkGrid from "./PinkGrid";
import WelcomeMenu from "./WelcomeMenu";
import FluidImg from "../assets/neon-fluid.png";

function Welcome(props) {
  return (
    <Grid className="welcome-container" container spacing={2}>
      <Grid item xs={12} md={6}>
        <div className="padding-container">
          <p className="welcome-description">Hi, my name is</p>
          <h1>
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
      <Grid item xs={12} md={6}>
        <PinkGrid
          customClass="neon-fluid"
          imgSrc={FluidImg}
          imgAlt="neon fluid graphic"
        />
      </Grid>
    </Grid>
  );
}

export default Welcome;
