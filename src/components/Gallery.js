import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Gallery from 'react-grid-gallery';


const useStyles = makeStyles({
  heading:{
    textAlign:'center',
    color: '#8CB21C',
  },


});

const IMAGES =
[{

        src: require('../images/one.JPG'),
        thumbnail: require('../images/one.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('../images/three.JPG'),
        thumbnail: require('../images/three.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/10.JPG'),
        thumbnail: require('../images/10.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/22.JPG'),
        thumbnail: require('../images/22.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: require('../images/34.JPG'),
        thumbnail: require('../images/34.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: require('../images/gb.JPG'),
        thumbnail: require('../images/gb.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('../images/logo3.JPG'),
        thumbnail:  require('../images/logo3.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/34.JPG'),
        thumbnail: require('../images/34.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/logo3.JPG'),
        thumbnail:  require('../images/logo3.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,

        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: require('../images/three.JPG'),
        thumbnail: require('../images/three.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: require('../images/one.JPG'),
        thumbnail: require('../images/one.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('../images/logo3.JPG'),
        thumbnail:  require('../images/logo3.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/34.JPG'),
        thumbnail: require('../images/34.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: require('../images/three.JPG'),
        thumbnail: require('../images/three.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: require('../images/logo3.JPG'),
        thumbnail:  require('../images/logo3.JPG'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

function Gallary() {
  const classes = useStyles();

return (
  <Container maxWidth="xl">
    <div className={classes.heading}>
      <h2>GALLERY</h2>
    </div>
    <div className={classes.gallery}>
      <Gallery images={IMAGES}/>
    </div>
  </Container>
);
}

export default Gallary;
