import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectCard(props) {
  return (
    <a target="_blank" href={props.elArr.projectLink}>
      <Card
        key={props.id}
        className="hover-craft"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          maxWidth: 345,
          margin: "0 20px 20px 0",
          minHeight: 540,
          minWidth: 200,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.elArr.projectImg}
            alt=""
          />
          <CardContent>
            <h4>{props.elArr.projectTitle}</h4>
            <p>{props.elArr.projectDesc}</p>
            {props.elArr.projectTech.map((item, index) => {
              return (
                <Chip
                  sx={{
                    borderColor: "#2F2029",
                    borderRadius: "4px",
                    color: "#2F2029",
                    margin: "2px",
                  }}
                  key={index}
                  label={item}
                />
              );
            })}
            <div className="open-in-new">
              <OpenInNewIcon sx={{ color: "#2F2029", marginRight: "10px" }} />
              <p>Click to open</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

export default ProjectCard;
