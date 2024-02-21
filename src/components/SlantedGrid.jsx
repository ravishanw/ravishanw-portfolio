import SlantedPinkGrid from "../assets/slanted-grid.png";
function SlantedGrid(props) {
  return (
    <div className="slanted-container">
      <img
        className="slanted-grid"
        src={SlantedPinkGrid}
        alt="pink grid graphic"
      />
      <img
        className="slanted-fluid"
        src={props.fluidGraphic}
        alt="fluid graphic"
      />
    </div>
  );
}

export default SlantedGrid;
