import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Travel Companion
          </Typography>
          <IconButton color="inherit" ><Link to  ="/home">Home</Link>
          </IconButton>
          <Button color="primary" ><Link to  ="/signIn" style = {{textDecoration:"none", color:"white",borderRadius:"5px", padding:"5px",backgroundColor:"orange"}}>Login</Link>
          </Button>
          <IconButton color="inherit" ><Link to  ="/destination">Destination</Link>
          </IconButton>
          <IconButton color="inherit">
            <p>User {loggedInUser.name}</p>
          </IconButton>
          {/* <IconButton
            color="inherit"
            onClick={() => setExample("customHeight")}
          >
            6
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
