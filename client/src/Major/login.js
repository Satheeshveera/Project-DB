import React, { Component } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import styles from "../style/styles";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: "",
      Password: "",
      user: [],
      flag: false,
    };
    this.Open = () => {
      if (localStorage.getItem("userdetails") === null) {
        localStorage.setItem("userdetails", JSON.stringify([]));

        var file = JSON.parse(localStorage.getItem("userdetails"));

        file.push({
          User_Id: this.state.User_Id,
          Password: this.state.Password,
        });
        localStorage.setItem("userdetails", JSON.stringify(file));
        // this.props.history.push("/home");
      }
      if (this.state.User_Id !== "" && this.state.Password !== "") {
        axios.post("/user").then((res) => {
          console.log(res);
          this.setState({
            user: [...res.data],
          });
          console.log("1st", res.data[0].User_Id);
          console.log("user: ", this.state.user);

          for (let i = 0; i < res.data.length; i++) {
            if (
              res.data[i].User_Id === this.state.User_Id &&
              res.data[i].Password === this.state.Password
            ) {
              this.state.flag = true;
              // alert("Login successfully...");
              this.props.history.push("/home");
            }
          }
          if (this.state.flag === false) {
            alert("UserId and Password is incorrect");
          }
        });
        // });
      } else {
        alert("Please fill all fields");
      }
      //localStorage.setItem("User_Id", JSON.stringify(this.state.User_Id));
      //localStorage.setItem("Password", JSON.stringify(this.state.Password));

      // var flag = true;
      // var wrg = false;
      // this.state.user.forEach((user) => {
      //   if (
      //     this.state.User_Id === user.User_Id &&
      //     this.state.Password === user.Password
      //   ) {
      //     console.log(this.state.user);
      //     sessionStorage.setItem("user", JSON.stringify(user));
      //     if (sessionStorage.getItem("this.state.user") === null) {
      //       sessionStorage.setItem("this.state.user", JSON.stringify([]));
      //     }
      //     var file = JSON.parse(sessionStorage.getItem("this.state.user"));
      //     file.forEach((user) => {
      //       if (
      //         user.User_Id ===
      //         JSON.parse(sessionStorage.getItem("user")).User_Id
      //       ) {
      //         wrg = true;
      //       }
      //     });
      //     if (!wrg) {
      //       file.push(user);
      //       sessionStorage.setItem("this.state.user", JSON.stringify(file));
      //     }
      //     this.props.history.push("/home");
      //     flag = false;
      //   }
      // });
      // if (flag) {
      //   alert("First to Create a Account");
      // }
    };
  }
componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <Box style={styles.box}>
        <Box border="1px solid Black" style={styles.form}>
          <Box fontSize="30px" mb={2}>
            Login
          </Box>
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="User_Id"
              required
              type="email"
              name="User_Id"
              value={this.state.User_Id}
              onChange={(event) => {
                this.setState({
                  User_Id: event.target.value,
                });
                console.log(event.target.value);
              }}
            ></TextField>
          </Box>
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Password"
              required
              name="Password"
              type="password"
              value={this.state.Password}
              onChange={(event) => {
                this.setState({
                  Password: event.target.value,
                });
                console.log(event.target.value);
              }}
            ></TextField>
          </Box>
          <Box mt={2} mb={2}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                this.Open();
                console.log("clicked");
              }}
            >
              Login
            </Button>
          </Box>
          <Typography>
            <NavLink to="/user">Create Account</NavLink>
          </Typography>
        </Box>
      </Box>
    );
  }
}
