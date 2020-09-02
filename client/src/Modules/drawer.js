import React from "react";
import PropTypes from "prop-types";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
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
import AdjustIcon from "@material-ui/icons/Adjust";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Icon, Box, Button, Checkbox, TextField } from "@material-ui/core";

import G from "./G.png";

const drawerWidth = 240;

const options = ["Add", "Read", "Write"];
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    marginLeft: "16%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,

      flexShrink: 0,
    },
  },
  //   appBar: {
  //     [theme.breakpoints.up("sm")]: {
  //       width: `calc(100% - ${drawerWidth}px)`,
  //       marginLeft: drawerWidth,
  //     },
  //   },
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

function Drawer1(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={{ backgroundColor: "#ede9e8" }}>
        <img
          src={G}
          alt="Logo"
          style={{
            width: "59px",
            marginLeft: "90px",
          }}
          // style={{ width: "59px" }}
        />
      </div>
      {/* <FcGoogleIcon /> */}
      <Divider />
      <Button
        variant="contained"
        size="small"
        color="primary"
        style={{ marginLeft: "10px", marginTop: "20px", width: "90%" }}
        onClick={() => {
          return <TextField label="To" varient="outlined"></TextField>;
        }}
      >
        Compose
      </Button>
      <List>
        <ListItem button onClick={myfunction()}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary="Send Mail" />
        </ListItem>
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItem>
      </List>
      <ListItem button onClick={() => {}}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary="Bin" />
      </ListItem>
      <Divider />
      <List>
        {["Friends", "Family", "Working"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <AdjustIcon color="primary" />
              ) : (
                <FiberManualRecordTwoToneIcon style={{ color: "red" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true,
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
      <main className={classes.content} style={{ backgroundColor: "#ede9e8" }}>
        <div className={classes.toolbar}></div>
        <div>
          <Checkbox />

          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </main>
      {function myfunction() {
        return;
        <div
          name="mailpage"
          style={{
            flexDirection: "column",
            display: "flex",
            marginTop: "0",
          }}
        >
          <TextField></TextField>
          <TextField></TextField>
        </div>;
      }}
    </div>
  );
}

Drawer1.propTypes = {
  window: PropTypes.func,
};

export default Drawer1;
