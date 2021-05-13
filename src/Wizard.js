//import { store } from "./Components/Store/DataStore";
import React from "react";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { incStep } from "./Components/Actions/incStep";
import { incrementAction, decreaseAction } from "./Components/Actions/Actions";
import FirstStep from "./Components/Steps/FirstStep";
import SecondStep from "./Components/Steps/SecondStep";

function Wizard(props) {
  const { login, step, incrementAction, decreaseAction, password, subscribeType } = props;

  function GetCurrentStep(){
    switch(step){
      case 1: return <FirstStep />
      case 2: return <SecondStep />
      default: return <div>что то пошло не так(</div>
    } 
  }

  return (
    <div>
      <button onClick={incrementAction}>+</button>
      {step}
      {login}
      {password}
      {subscribeType}
      <GetCurrentStep />
    </div>
  );
}

const mapStateToProps = (state) => ({
  step: state.step,
  login: state.login,
  password: state.password,
  subscribeType: state.subscribeType
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
  //setStoreLogin: (login) => dispatch(setStoreLogin(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
