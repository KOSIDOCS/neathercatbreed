import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { login } from "../utils/common";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const classes = useStyles();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    login(history, user);
  };

  return (
    <form onSubmit={handleLogin} className={classes.root} autoComplete="off">
      <TextField
        id="email"
        type="email"
        label="email"
        variant="outlined"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="off"
      />
      <TextField
        id="password"
        type="password"
        label="password"
        variant="outlined"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="current-password"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
