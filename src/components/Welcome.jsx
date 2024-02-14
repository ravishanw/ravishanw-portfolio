import Grid from "@mui/material/Grid";
import PinkGrid from "./PinkGrid";
import WelcomeMenu from "./WelcomeMenu";

function Welcome(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div className="welcome-container">
          <p>Hi, my name is</p>
          <h1>
            Ravishan <br />
            Wijemanne
          </h1>
          <p className="welcome-description">
            I am a full stack web developer & UI/UX designer creating elegant
            and accessible interfaces. <br /> Also, you can just call me Ravi
            &#128522;
          </p>
          <WelcomeMenu navList={props.navList} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <PinkGrid />
      </Grid>
    </Grid>
  );
}

export default Welcome;
