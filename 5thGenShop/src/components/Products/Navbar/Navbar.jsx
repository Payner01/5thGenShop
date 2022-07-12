import React from 'react'
import { AppBar, Toolbar, IconButton, Badgem, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


const Navbar = () => {
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variabnt="h6" className={classes.appBar} color="inherit">
                    <img src={} alt="5thGenShop" height="25px" className={classes.image} />
                    5thGenShop
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show Cart Items' color='inherit'></IconButton>
                    
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
