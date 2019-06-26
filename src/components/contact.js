import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '15%',
  },
  button: {
    margin: theme.spacing(2),
    padding: '15px',
    width: '10em'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    width: '98%',
  },
  textField:{
    paddingRight:'20px',
    width: '30%',
    borderColor: 'black',
  },
  logo:{
    height: '250px',
    paddingTop: '10px',
  },
  heading:{
    textAlign:'center',
    color: '#8CB21C',
  },

}));

function Contact() {
  const classes = useStyles();

  return (

    <Container maxWidth="xl">
    <div className={classes.heading}>
      <h2>CONTACT US</h2>
    </div>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{decoration:'none'}}>
          <Paper className={classes.paper}>
            <div style={{marginBottom:"1em", marginTop:'1em'}}>
            <Typography variant="h4" gutterBottom>
               Get in touch with us
            </Typography>
            </div>
            <form>
              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Your message"
                style={{ margin: 8 }}
                placeholder="Your Message"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div style={{marginTop:"20px"}}>
              <Button variant="outlined" className={classes.button}>
                Get In Touch
              </Button>
              </div>
            </form>
          </Paper>
        </Grid>

      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} style={{marginTop:'5%', decoration:'none'}}>
          <Paper className={classes.paper}>
            <div style={{marginBottom:"1em", marginTop:'1em'}}>
            <img src={require('../add.jpg')}
              alt="avatar"
              className={classes.logo}
             />
            <Typography variant="h6" gutterBottom>
              Keezhattupurath Illam, Naderi(po), Koyilandy, Calicut, Kerala-673620
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email:drkpsasi@gmail
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone:04962695767
              Mobile:9446569767
            </Typography>
            </div>
            <form>

            </form>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Contact;
