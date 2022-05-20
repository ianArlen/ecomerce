import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png"
import { Badge} from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none"
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "4rem"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar} style={{backgroundColor: "#f2f2f2"}}>
          <Toolbar>
            <IconButton>
                <img
                  src={logo}
                  alt='Commerce.js'
                  height='25px'
                  className={classes.image}
                />
            </IconButton>
            <Typography variant='h6' color="#7d7d7d" component="p">
              e-Commerce Gapsi
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart fontSize="large" color="primary"/>
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
