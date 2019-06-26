import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: '345px',
  },
  media: {
    height: '140px',
  },
});

export default function MediaCard({value, desciption}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:'Philosopher , sansSerif'}}>
            {value}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desciption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
