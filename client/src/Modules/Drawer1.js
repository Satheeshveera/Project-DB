import React, { Component } from "react";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AdjustIcon from "@material-ui/icons/Adjust";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Compose from "./compose";
import moment from "moment";
import Tabpanals from "./tabs";

import {
  Icon,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableBody,
} from "@material-ui/core";

import G from "./G.png";
import axios from "axios";

export default class Drawar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAdd: false,
      open: false,
      handleclose: true,
      send: [],
      in: [],
      inbox: false,
      sendmails: false,

      options: ["Add", "Read", "Write"],
      date_create: "",
    };
    this.handleClose = () => {
      console.log("canceled");
    };
  }
  componentDidMount() {
    axios.get("/user").then((res) => {
      this.setState({
        users: [...res.data],
      });
      console.log(...res.data);
    });
    axios.get("/compose").then((res) => {
      let inx = [];
      for (let i = 0; i < res.data.length; i++) {
        if (
          JSON.parse(localStorage.getItem("userdetails"))[0].User_Id ===
          res.data[i].To
        )
          inx.push(res.data[i]);
      }
      if (inx.length > 0) {
        this.setState({
          in: [...inx],
        });
      }
      console.log("in", this.state.in);
    });
    axios.get("/compose").then((res) => {
      let sends = [];
      for (let i = 0; i < res.data.length; i++) {
        if (
          JSON.parse(localStorage.getItem("userdetails"))[0].User_Id ===
          res.data[i].From
        )
          sends.push(res.data[i]);
      }
      if (sends.length > 0) {
        this.setState({
          send: [...sends],
        });
      }
      console.log("send", this.state.send);
    });
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundColor: "#ede9e8",
            width: "18%",
            height: "100vh",
            position: "fixed",
            flexFlow: "row",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{
              marginLeft: "4vh",
              marginTop: "12vh",
              width: "75%",
              display: "flex",
            }}
            onClick={() => {
              this.setState({
                openAdd: true,
              });
            }}
          >
            Compose
          </Button>
          <List>
            <ListItem
              button
              onClick={() => {
                this.setState({ inbox: true, sendmails: false });
this.componentDidMount();
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                this.setState({ sendmails: true, inbox: false });
this.componentDidMount();
              }}
            >
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
            <ListItem button onClick={() => {}}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary="Bin" />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>

          <Divider />
          <List>
            {["Friends", "Family", "Working", "Add"].map((text, index) => (
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
          <Dialog open={this.state.openAdd} maxWidth="lg" fullWidth>
            <DialogContent>
              <Compose
                cancel={() => {
                  this.setState({
                    openAdd: false,
                  });
                  this.handleClose();
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div
          style={{
            marginLeft: "18%",
            marginTop: "35px",
            width: "82%",
            height: "90vh",
            scrollBehavior: "smooth",
          }}
        >
          {this.state.sendmails === true ? (
            <Box marginTop="6vh">
              <div>
                <Checkbox />

                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
              <TableContainer>
                <Table aria-label="customized table">
                  <TableBody>
                    {this.state.send.map((list) => (
                      <TableRow>
                        <TableCell align="right">
                          <Checkbox />
                        </TableCell>
                        <TableCell align="left">
                          <VisibilityIcon />
                        </TableCell>
                        <TableCell align="left">{list.To}</TableCell>
                        <TableCell align="left">{list.Subject}</TableCell>

                        <TableCell align="left">{list.Description}</TableCell>
                        <TableCell align="left">{list.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : (
            <Box marginTop="35px">
              <Tabpanals></Tabpanals>
              <Box marginTop="6vh">
                <div>
                  <Checkbox />

                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </div>
                <TableContainer>
                  <Table aria-label="customized table">
                    <TableBody>
                      {this.state.in.map((list) => (
                        <TableRow>
                          <TableCell align="right">
                            <Checkbox />
                          </TableCell>
                          <TableCell align="left">
                            <VisibilityIcon />
                          </TableCell>
                          <TableCell align="left">{list.From}</TableCell>
                          <TableCell align="left">{list.Subject}</TableCell>

                          <TableCell align="left">{list.Description}</TableCell>
                          <TableCell align="left">{list.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          )}
        </div>
      </div>
    );
  }
}
