import React, { useState, useEffect } from "react";
import { Route, Link, Redirect, useLocation } from "react-router-dom";
import CreateProducts from "../conponents/products/CreateProducts";
import EmployeeeConfirm from "../conponents/confirm/EmployeeConfirm";
import ListProducts from "../conponents/products/ListProducts";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { right } from "@material-ui/system";
import Navbar from "./layouts/Navbar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PetsIcon from "@material-ui/icons/Pets";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Dashboard from "./DashBoard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Admin(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const value = useLocation();
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Redirect to="/" />;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to={`${props.match.url}`}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to={`${props.match.url}/addProduct`}>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Create Product" />
          </ListItem>
        </Link>
        <Link to={`${props.match.url}/listProducts`}>
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <Link to={`${props.match.url}`}>
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
        </Link>
        {/*["Dashboard", "Confirm Order", "Products", "Sales"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <ListAltIcon />}
                {index === 2 && <PetsIcon />}
                {index === 3 && <AttachMoneyIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
          )*/}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // const preventDefault = console.log("Click");
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Navbar />
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route
          exact
          path={`${props.match.url}/addProduct`}
          component={CreateProducts}
        />
        <Route
          exact
          path={`${props.match.url}/`}
          component={EmployeeeConfirm}
        />

        <Route
          exact
          path={`${props.match.url}/listProducts`}
          component={ListProducts}
        />
      </main>
    </div>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
