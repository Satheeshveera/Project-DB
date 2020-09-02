import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import user from "./Major/user";
import login from "./Major/login";
import home from "./Major/home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={login} />
      <Route path="/user" exact component={user} />
      <Route path="/home" exact component={home} />
    </BrowserRouter>
  );
}

export default App;
