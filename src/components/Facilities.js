import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  heading:{
    textAlign:'center',
    color: '#8CB21C',
  },
  logo:{
    height: '29.7em',
  },
  paper:{
    maxHeight:'30em',
    height: '29.7em',
  },
  paper1:{
    maxHeight:'30em',
    minWidth:'13em',
    height:'15em',
    textAlign:'center',
    fontSize:'2em',
    fontFamily: 'Philosopher , sansSerif',
  },
  tavatar:{
    height:'18em',
    borderRadius:'40%',
  },
  paper2:{
      height: '100%',
      minWidth:'15em',
      textAlign:'center',
      color:'orange',
      fontFamily: 'Philosopher , sansSerif',
      fontSize:'1em',
      marginTop:'10%',
  },
  p:{
    color:'black',
    fontSize:'1.5em',
  },
});


function Facilities() {

    const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <div className={classes.heading}>
        <h2>TREATMENTS</h2>
      </div>
      <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
        <img src={require('../treatment.jpg')}
        alt="avatar"
        className={classes.logo}
        />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper1}>
          <div style={{fontSize:'2em', color:'orange'}}>AYURVEDA</div>
          <div style={{fontSize:'1em', marginTop:'15%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem."</div>

        </Paper>
      </Grid>
      </Grid>


      <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className={classes.paper2}>
        <img src={require('../logo1.png')}
        alt="avatar"
        className={classes.tavatar}
        />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.paper2}>
          <h1>TREATMENT ONE</h1>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem.</p>
        </div>
      </Grid>
      </Grid>

      <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className={classes.paper2}>
        <img src={require('../logo1.png')}
        alt="avatar"
        className={classes.tavatar}
        />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.paper2}>
          <h1>TREATMENT TWO</h1>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem.</p>
        </div>
      </Grid>
      </Grid>

      <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className={classes.paper2}>
        <img src={require('../logo1.png')}
        alt="avatar"
        className={classes.tavatar}
        />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.paper2}>
          <h1>TREATMENT THREE</h1>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem.</p>
        </div>
      </Grid>
      </Grid>

      <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className={classes.paper2}>
        <img src={require('../logo1.png')}
        alt="avatar"
        className={classes.tavatar}
        />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.paper2}>
          <h1>TREATMENT FOUR</h1>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem.</p>
        </div>
      </Grid>
      </Grid>
    </Container>
  );
}

export default Facilities;
