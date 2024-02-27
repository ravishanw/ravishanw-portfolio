function PinkGrid(props) {
  return (
    <div className="pink-grid">
      <img
        className={props.customClass}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
      {props.imgDopple && (
        <img
          className="neon-fluid-dopple"
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      )}
    </div>
  );
}

export default PinkGrid;
