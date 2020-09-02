import React, { Component } from "react";
import { Box, TextField, Button, IconButton } from "@material-ui/core";
import styles from "../style/styles";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
export default class Compose extends Component {
  constructor(props) {
    super();
    this.state = {
      From: "",
      Subject: "",
      To: "",
      Description: "",
      users: [],
      // flag1: true,
    };
    this.Add = () => {
      if (this.state.To !== "") {
        axios.get("/user").then((res) => {
          this.setState({
            users: [res.data],
          });
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            if (this.state.To === res.data[i].User_Id) {
              console.log("correct");

              axios
                .post("/compose/add", {
                  From: JSON.parse(localStorage.getItem("userdetails"))[0]
                    .User_Id,

                  To: this.state.To,
                  Subject: this.state.Subject,
                  Description: this.state.Description,
                })
                .then((res) => {
                  console.log(res);
                });
              this.props.cancel();
              // } else {
              //   this.setState({
              //     flag1=false
              //   })
            }
          }
          // if () {
          //   alert("To Address not found");
          // }
        });
      } else {
        alert("Please fill the To Address");
      }
    };
  }
  componentDidMount() {
    axios.get("/user").then((res) => {
      this.setState({
        users: [...res.data],
      });
      console.log(...res.data);
    });
  }
  render() {
    return (
      <Box>
        <Box
          fontSize="30px"
          mb={2}
          backgroundColor="primary"
          display="flex"
          flexDirection="row"
        >
          Compose Mail
          <Box ml={120}>
            <IconButton
              onClick={() => {
                this.props.cancel();
              }}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
        <Box style={styles.boxSize2} width="100%">
          <TextField
            size="small"
            fullWidth
            placeholder="To"
            required
            type="email"
            name="To"
            value={this.state.To}
            onChange={(event) => {
              this.setState({
                To: event.target.value,
              });
              console.log(event.target.value);
            }}
          ></TextField>
        </Box>
        <Box style={styles.boxSize2} width="100%">
          <TextField
            size="small"
            fullWidth
            placeholder="Subject"
            required
            name="Subject"
            value={this.state.Subject}
            onChange={(event) => {
              this.setState({
                Subject: event.target.value,
              });
              console.log(event.target.value);
            }}
          ></TextField>
        </Box>
        <Box style={styles.boxSize2} width="100%">
          <TextField
            size="small"
            fullWidth
            placeholder="Description"
            required
            multiline
            rows={7}
            name="Description"
            value={this.state.Description}
            onChange={(event) => {
              this.setState({
                Description: event.target.value,
              });
              console.log(event.target.value);
            }}
          ></TextField>
        </Box>
        {/* <TextField
          disabled
          type="date"
          name="Date"
          value={this.state.date}
          onChange={(event) => {
            this.setState({
              date: Date.now,
            });
          }}
        ></TextField> */}
        <Box mr={8} flexDirection="row">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              this.Add();
            }}
          >
            send
          </Button>
          &nbsp;
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              this.props.cancel();
            }}
          >
            draft
          </Button>
        </Box>
      </Box>
    );
  }
}
