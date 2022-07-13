import React from 'react'
import { AppBar, Toolbar, IconButton, Badgem, MenuItem, Menu, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/images/IMG_4692.JPG'
import  useStyles  from './styles'

const Navbar = () => {
  

  const classes = useStyles();
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variabnt="h6" className={classes.appBar} color="inherit">
                    <img src={logo} alt="5thGenShop" height="25px" className={classes.image} />
                    5thGenShop
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show Cart Items' color='inherit'>
                      <Badge badgeContent={2} color='secondary'>
                        <ShoppingCart />
                      </Badge>
                    </IconButton>
                    
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
