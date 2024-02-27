import SlantedPinkGrid from "../assets/slanted-grid.png";
function SlantedGrid(props) {
  return (
    <div className="slanted-container">
      <img
        className="slanted-grid"
        src={SlantedPinkGrid}
        alt="pink grid graphic"
      />
      <div className="credits-top-line"></div>
      <div className="credits-bottom-line"></div>
      <img
        className="slanted-fluid"
        src={props.fluidGraphic}
        alt="fluid graphic"
      />
      <img
        className="slanted-fluid-dopple glow-effect"
        src={props.fluidGraphic}
        alt="fluid graphic"
      />
    </div>
  );
}

export default SlantedGrid;
