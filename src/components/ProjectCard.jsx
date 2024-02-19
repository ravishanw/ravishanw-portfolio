import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";

function ProjectCard(props) {
  return (
    <Card key={props.id} sx={{ maxWidth: 345 }}>
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
            return <Chip key={index} label={item} />;
          })}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a target="_blank" href={props.elArr.projectLink}>
            Click to open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
