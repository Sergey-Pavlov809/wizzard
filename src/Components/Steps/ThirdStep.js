import React, { useState } from "react";
import { connect } from "react-redux";

function ThirdStep() {}

const mapStateToProps = (state) => ({
  step: state.step,
  //subscribeType: state.subscribeType
  //login: state.login,
  //password: state.password
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  //setStoreLogin: (login) => dispatch(setStoreLogin(login)),
  //setStorePassword: (password) => dispatch(setStorePassword(password))
  //setStoreSubType: (type) => dispatch(setStoreSubType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);
