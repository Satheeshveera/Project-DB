import React, { Component } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import styles from "../style/styles";
import axios from "axios";

export default class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
      User_Id: "",
      Password: "",
      Conform_Password: "",
    };
    this.Open = () => {
      if (
        this.state.User_Id !== "" &&
        this.state.Password !== "" &&
        this.state.Name !== "" &&
        this.state.Conform_Password !== ""
      ) {
        if (this.state.Password === this.state.Conform_Password) {
          axios
            .post("/user/add", {
              Name: this.state.Name,
              User_Id: this.state.User_Id,
              Password: this.state.Password,
            })
            .then((res) => {
              console.log(res);
              this.props.history.push("/");
            });
        } else {
          alert("Please check the Password");
        }
      } else {
        alert("Please fill all fields");
      }
    };
    // this.Open = () => {
    //   if (localStorage.getItem("userdetails") === null) {
    //     localStorage.setItem("userdetails", JSON.stringify([]));
    //   }
    //   if (
    //     this.state.User_Id !== "" &&
    //     this.state.Password !== "" &&
    //     this.state.Name !== "" &&
    //     this.state.Conform_Password !== ""
    //   ) {
    //     if (this.state.Password === this.state.Conform_Password) {
    //       var flag = false;
    //       var file = JSON.parse(localStorage.getItem("userdetails"));
    //       if (file.length > 0) {
    //         file.forEach((element) => {
    //           if (element.User_Id === this.state.User_Id) {
    //             alert("UserId also here");
    //             flag = true;
    //           }
    //         });
    //       }
    //       if (flag === false) {
    //         file.push({
    //           Name: this.state.Name,
    //           User_Id: this.state.User_Id,
    //           Password: this.state.Conform_Password,
    //         });
    //         localStorage.setItem("userdetails", JSON.stringify(file));
    //         this.props.history.push("/");
    //       }
    //     } else {
    //       alert("miss match password");
    //     }
    //   } else {
    //     alert("enter all fields");
    //   }

    //       };
  }

  render() {
    return (
      <Box style={styles.box}>
        <Box border="1px solid Black" style={styles.form}>
          <Box fontSize="30px" mb={2}>
            Create Account
          </Box>
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Name"
              required
              name="Name"
              value={this.state.Name}
              onChange={(event) => {
                this.setState({
                  Name: event.target.value,
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
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Conform_Password"
              required
              name="Conform_Password"
              type="password"
              value={this.state.Conform_Password}
              onChange={(event) => {
                this.setState({
                  Conform_Password: event.target.value,
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
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
