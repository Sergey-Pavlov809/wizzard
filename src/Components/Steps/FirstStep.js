import React, { useState } from "react";
import { connect } from "react-redux";

import { setStoreLogin, setStorePassword,incrementAction, setErrorMessege } from "./../Actions/Actions";

function FirstStep(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { setStoreLogin, setStorePassword, incrementAction, setErrorMessege } = props;

  function nextStep(e) {
    e.preventDefault();
    if(checkValidation()){
      setStorePassword(password);
      setStoreLogin(login);
      incrementAction();
      setErrorMessege("")
    }
  }

  function checkValidation() {
    if (login !== login.toLowerCase()) {
      setErrorMessege("логин не в нижнем регистре")
      return false;
    }

    if (password !== repeatPassword) {
      setErrorMessege("пароли не совпадают")
      return false
    };

    if(password.length <= 3) {
      setErrorMessege("слишком короткий пароль")
      return false
    }

    if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password)){
      setErrorMessege("пароль должен содержать как минимум одну букву и цифру")
      return false
    }

    return true;
  }

  return (
    <>
      <form onSubmit={(e) => nextStep(e)}>
        <div>login:</div>
        <input
          type="text"
          required
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        ></input>
        <div>password:</div>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div>repeat password:</div>
        <input
          type="password"
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        ></input>
        <button type="submit">next step</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  //decreaseAction: () => dispatch(decreaseAction()),
  setStoreLogin: (login) => dispatch(setStoreLogin(login)),
  setStorePassword: (password) => dispatch(setStorePassword(password)),
  setErrorMessege: (messege) => dispatch(setErrorMessege(messege))
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep);
