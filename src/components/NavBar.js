import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LandingPage from './landingpage.js';
import AboutUs from './aboutus.js';
import Contact from './contact.js';
import Facilities from './Facilities.js';
import Gallery from './Gallery.js';
import Docters from './Docters.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  appBar: {
    backgroundColor:'white',

  },
  ToolBar: {
    color: 'green',
  },
  Link: {
    textDecoration: 'none',
    color:'green',
    padding:'10px',
  },
  logo:{
    height:'5em',
  },
  buttons:{
    marginLeft: 'auto',
    fontSize:'18px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Router>
      <AppBar position="static" className={classes.appBar} style={{width:"100%"}}>
        <Toolbar className={classes.ToolBar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
             <Link to="/"  style={{textDecoration: 'none', color:'green'}}>
               <img src={require('../logo1.png')}
                 alt="avatar"
                 className={classes.logo}
                />
             </Link>
          </IconButton>
          <div className={classes.buttons}>
          <Link to="/" className={classes.Link}><Button color="inherit" className={classes.buttons}>Home</Button></Link>
          <Link to="/about" className={classes.Link}><Button color="inherit" className={classes.buttons}>About Us</Button></Link>
          <Link to="/Facilities" className={classes.Link}><Button color="inherit" className={classes.buttons}>Treatments</Button></Link>
          <Link to="/Gallery" className={classes.Link}><Button color="inherit" className={classes.buttons}>Gallery</Button></Link>
          <Link to="/contact" className={classes.Link}><Button color="inherit" className={classes.buttons}>Contact Us</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
      <Route path="/" exact strict component={LandingPage} />
      <Route path="/about" exact strict component={AboutUs} />
      <Route path="/contact" exact strict component={Contact} />
      <Route path="/Facilities" exact strict component={Facilities} />
      <Route path="/Gallery" exact strict component={Gallery} />

      </Router>
    </div>
  );
}
