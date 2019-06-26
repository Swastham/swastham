import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  carosal: {
    height:'100%',
    backgroundColor:'white',
  },
  paper: {
    backgroundColor:'white',
    textAlign:'center',
    height: 'inherit',
  },
  h1: {
    marginTop:'10%',
  },
  div:{
    marginTop:'30px',
  },
}));


//class TestCarousel extends Component
export default function TestCarousel()
{
  const classes = useStyles();

        return (
          <div className={classes.div}>
              <Carousel
                  showThumbs={false}
                  showStatus={false}
                  useKeyboardArrows
                  autoPlay interval={3000} infiniteLoop
                  >
                    <div  style={{color: 'white', height:'250px', marginTop:'0px'}}>
                        <div className="my-slide content">

                        <h2>
                         By, Name
                        </h2>
                        <h3>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida"
                        </h3>
                        </div>
                    </div>
                    <div  style={{color: 'white', height:'250px', marginTop:'0px'}}>
                        <div className="my-slide content">

                        <h2>
                         By, Name
                        </h2>
                        <h3>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida"
                        </h3>
                        </div>
                    </div>
                    <div  style={{color: 'white', height:'250px', marginTop:'0px'}}>
                        <div className="my-slide content">
                        
                        <h2>
                         By, Name
                        </h2>
                        <h3>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quis mauris et gravida"
                        </h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
}
