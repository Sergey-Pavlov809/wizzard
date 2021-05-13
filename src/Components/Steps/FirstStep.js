import React, { useState } from "react";
import { connect } from "react-redux";

import { setStoreLogin, setStorePassword,incrementAction } from "./../Actions/Actions";

function FirstStep(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { setStoreLogin, setStorePassword, incrementAction } = props;

  function nextStep(e) {
    e.preventDefault();
    console.log(checkValidation())
    if(checkValidation()){
      setStorePassword(password);
      setStoreLogin(login);
      incrementAction();
    }
  }
  /*
  
  */

  function checkValidation() {
    console.log("check validation")
    if (password === repeatPassword) {
      console.log("password not ok")
      return false};
    if (login.length <= 5) {
      console.log("login not ok")
      return false};
    if (login !== login.toLowerCase()) {
      console.log("not lower case")
      return false;}
    return true;
  }

  return (
    <>
      <form onSubmit={(e) => nextStep(e)}>
        <div>login:</div>
        <input
          type="text"
          id="login"
          name="user_login"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        ></input>
        <div>password:</div>
        <input
          type="password"
          id="password"
          name="user_password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div>repeat password:</div>
        <input
          type="password"
          id="rep_password"
          name="rep_user_password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">next step</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  step: state.step,
  login: state.login,
  password: state.password
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  //decreaseAction: () => dispatch(decreaseAction()),
  setStoreLogin: (login) => dispatch(setStoreLogin(login)),
  setStorePassword: (password) => dispatch(setStorePassword(password))
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep);
