import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card.js';
import TestCarousel from './testimonial.js';


function LandingPage() {
  
  const Treatment1 = 'treatment one';
  const Treatment2 = 'treatment two';
  const Treatment3 = 'treatment three';
  const Treatment4 = 'treatment four';
  const Treatment5 = 'treatment five';
  const Treatment6 = 'treatment six';
  const Desciption1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const Desciption2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const Desciption3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const Desciption4 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const Desciption5 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const Desciption6 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <Container maxWidth="xl">
    <Grid container spacing={3}>
      <Grid item xs={4}>
            <div style={{marginTop:'60%',marginLeft:'15%', textAlign:"center", fontFamily: 'Philosopher , sansSerif', fontSize:'2vw', color:'#352F30'}}>
                <h1>NAMASTE </h1>

            </div>
      </Grid>
      <Grid item xs={8}>
          <div style={{marginTop:'28px', width: '100%',lineHeight: '.1', textAlign:"center", height: '15%', fontFamily: 'Philosopher , sansSerif', fontSize:'4vw', color:'orange'}}>
            <img src={require('../logo1.png')}
              alt="avatar"
              style={{ height:'5em'}}
             />
            <h1>Swastham </h1>
            <h2 style={{color:'#352F30'}}>Ayurvedaramam</h2>
          </div>
      </Grid>
    </Grid>
    <div style={{textAlign:"center", fontFamily: 'Philosopher , sansSerif', fontSize:'1.2vw', color:'#352F30'}}>
        <h1 style={{color:'orange'}}>Dr Sasi Keezhattupurath's Swastham</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida. Integer fermentum lorem lorem. Nam molestie ligula a posuere pharetra. Mauris ultricies sit amet metus vitae suscipit. Proin ut augue varius, facilisis erat et, tincidunt neque. Integer turpis justo, laoreet sit amet luctus consequat, rhoncus non odio. Aliquam convallis, elit sit amet pellentesque malesuada, mi felis placerat tellus, a lobortis tortor augue at orci. Pellentesque et congue lorem. Etiam feugiat id neque mollis ornare. Donec ornare, ante et auctor pretium, eros quam tempus purus, eget interdum purus erat sit amet elit. Donec feugiat ipsum et neque rutrum, sed tempor sapien volutpat. Phasellus metus ante, egestas ac iaculis sit amet, pulvinar eget mi. Ut eget eleifend nulla.

        Donec odio ipsum, commodo ut elit a, interdum tincidunt nisi. Nulla ut urna ac nibh iaculis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquam augue eget nunc pharetra, sed condimentum nibh sagittis. Nullam dapibus condimentum massa vel sodales. Duis non ex orci. Nulla sagittis tellus id risus suscipit aliquam. Maecenas consequat lacus non commodo pellentesque. Proin nec consequat est. Aenean dignissim mauris vel massa pretium, nec suscipit nibh tempor.</h2>
    </div>
    <div style={{textAlign:"center", fontFamily: 'Philosopher , sansSerif', fontSize:'1.2vw', color:'#352F30'}}>
      <h1 style={{color:'orange'}}>Ayurvedic Treatments</h1>
    </div>
    <div style={{marginLeft:'3.8%'}}>
      <Grid container spacing={3}>
          <Grid item xs={4}>
              <MediaCard
                value = {Treatment1}
                desciption = {Desciption1}
              />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              value = {Treatment2}
              desciption = {Desciption2}

            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              value = {Treatment3}
              desciption = {Desciption3}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <MediaCard
                value = {Treatment4}
                desciption = {Desciption4}
                />

            </Grid>
            <Grid item xs>
              <MediaCard
              value = {Treatment5}
              desciption = {Desciption5}
              />
            </Grid>
            <Grid item xs>
              <MediaCard
              value = {Treatment6}
              desciption = {Desciption6}
              />
            </Grid>
        </Grid>
      </div>
        <div style={{textAlign:"center", fontFamily: 'Philosopher , sansSerif', fontSize:'1.2vw', color:'#352F30'}}>
          <h1 style={{color:'orange'}}>Testimonials</h1>
        </div>
        <div>
          <TestCarousel />
        </div>
    </Container>
  );
}

export default LandingPage;
