import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";

function ProjectCard(props) {
  return (
    <Card
      key={props.id}
      className="hover-craft"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        maxWidth: 345,
        margin: "0 20px 20px 0",
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a target="_blank" href={props.elArr.projectLink}>
          <Button
            size="small"
            sx={{
              color: "#2F2029",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "300",
            }}
          >
            Click to open
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
