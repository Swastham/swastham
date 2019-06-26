import React from 'react';
import AppBar from '@material-ui/core/AppBar';
function Footer() {
  return (
    <div style={{ textAlign:"center",position:"absolute", bottom:'0px', width:'100%' }}>
    <AppBar position="absolute" style={{width:"100%", backgroundColor:"white", color:"green", bottm: '0px'}}>
      <h1>Footer</h1>
    </AppBar>
    </div>
  );
}

export default Footer;
