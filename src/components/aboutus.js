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
  paper:{
    height:'400px',
    minHeight: '300px',
    maxHeight:'400px',
    minWidth:' 350px',
    textAlign:'center',
    color:'#352F30',
    fontFamily: 'Philosopher , sansSerif',
  },
  logo:{
    height:'13em',
    marginTop: '10%',
    borderRadius: '50px',
  },
  paper2:{
    fontSize:'2em',
    height:'400px',
    minHeight: '300px',
    maxHeight:'373px',
    minWidth:' 250px',
    textAlign:'left',
    color:'orange',
    fontFamily: 'Philosopher , sansSerif',
    paddingTop:'3%',
    paddingBottom:'0',
  },
  paper3:{
    fontSize:'2em',
    height:'100%',
    minHeight: '300px',
    maxHeight:'100%',
    minWidth:' 250px',
    textAlign:'center',
    color:'orange',
    fontFamily: 'Philosopher , sansSerif',
    paddingTop:'3%',
    paddingBottom:'0',
  },

});


function AboutUs() {

  const classes = useStyles();

  return (
      <Container maxWidth="xl">
        <div className={classes.heading}>
          <h2>ABOUT US</h2>
        </div>
        <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={require('../avatar.jpg')}
          alt="avatar"
          className={classes.logo}
          />
          <h2>Dr Sasi keezhattupurath</h2>
          <h3>( Founder & Chief Physician )</h3>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper2}>
           Dr Sasi keezhattupurath BAMS - Swastham Ayurvedaramam
           <h3 style={{color:'black', fontSize:'.7em'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem. Nam molestie ligula a posuere pharetra. Mauris ultricies sit amet metus vitae suscipit. Proin ut augue varius, facilisis erat et, tincidunt neque. Integer turpis justo, laoreet sit amet luctus consequat, rhoncus non odio. Aliquam convallis, elit sit amet pellentesque malesuada, mi felis placerat tellus, a lobortis tortor augue at orci. Pellentesque et congue lorem. Etiam feugiat id neque mollis ornare. Donec ornare, ante et auctor pretium, eros quam tempus purus, eget interdum purus erat sit amet elit. </h3>

          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>

      <Grid item xs={12}>
        <Paper className={classes.paper3}>
        Swastham Ayurvedaramam
         <h3 style={{color:'black', fontSize:'.7em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem. Nam molestie ligula a posuere pharetra. Mauris ultricies sit amet metus vitae suscipit. Proin ut augue varius, facilisis erat et, tincidunt neque. Integer turpis justo, laoreet sit amet luctus consequat, rhoncus non odio. Aliquam convallis, elit sit amet pellentesque malesuada, mi felis placerat tellus, a lobortis tortor augue at orci. Pellentesque et congue lorem. Etiam feugiat id neque mollis ornare. Donec ornare, ante et auctor pretium, eros quam tempus purus, eget interdum purus erat sit amet elit. Donec feugiat ipsum et neque rutrum, sed tempor sapien volutpat. Phasellus metus ante, egestas ac iaculis sit amet, pulvinar eget mi. Ut eget eleifend nulla.</h3>
         Why Ayurveda?
         <h3 style={{color:'black', fontSize:'.7em'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem. Nam molestie ligula a posuere pharetra. Mauris ultricies sit amet metus vitae suscipit. Proin ut augue varius, facilisis erat et, tincidunt neque. Integer turpis justo, laoreet sit amet luctus consequat, rhoncus non odio. Aliquam convallis, elit sit amet pellentesque malesuada, mi felis placerat tellus, a lobortis tortor augue at orci. Pellentesque et congue lorem. Etiam feugiat id neque mollis ornare. Donec ornare, ante et auctor pretium, eros quam tempus purus, eget interdum purus erat sit amet elit. Donec feugiat ipsum et neque rutrum, sed tempor sapien volutpat. Phasellus metus ante, egestas ac iaculis sit amet, pulvinar eget mi. Ut eget eleifend nulla.</h3>
          Heading
          <h3 style={{color:'black', fontSize:'.7em'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem. Nam molestie ligula a posuere pharetra. Mauris ultricies sit amet metus vitae suscipit. Proin ut augue varius, facilisis erat et, tincidunt neque. Integer turpis justo, laoreet sit amet luctus consequat, rhoncus non odio. Aliquam convallis, elit sit amet pellentesque malesuada, mi felis placerat tellus, a lobortis tortor augue at orci. Pellentesque et congue lorem. Etiam feugiat id neque mollis ornare. Donec ornare, ante et auctor pretium, eros quam tempus purus, eget interdum purus erat sit amet elit. Donec feugiat ipsum et neque rutrum, sed tempor sapien volutpat. Phasellus metus ante, egestas ac iaculis sit amet, pulvinar eget mi. Ut eget eleifend nulla.</h3>
        </Paper>
      </Grid>
    </Grid>
      </Container>
  );
}

export default AboutUs;
