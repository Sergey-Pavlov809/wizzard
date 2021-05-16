//import { store } from "./Components/Store/DataStore";
import React from "react";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { incStep } from "./Components/Actions/incStep";
import { incrementAction, decreaseAction } from "./Components/Actions/Actions";
import FirstStep from "./Components/Steps/FirstStep";
import SecondStep from "./Components/Steps/SecondStep";
import ThirdStep from './Components/Steps/ThirdStep';
import FourthStep from './Components/Steps/FourthStep';
import FifthStep from './Components/Steps/FifthStep';
import SixthStep from "./Components/Steps/SixthStep";

function Wizard(props) {
  const { login, step, incrementAction, decreaseAction, password, subscribeType, errorMessege } = props;

  function GetCurrentStep(){
    switch(step){
      case 1: return <FirstStep />
      case 2: return <SecondStep />
      case 3: return <ThirdStep />
      case 4: return <FourthStep />
      case 5: return <FifthStep />
      case 6: return <SixthStep />
      default: return <div>что то пошло не так(</div>
    } 
  }

  function GetErrorMessege(){
    return <p>{errorMessege}</p>
  }

  return (
    <>
      <GetCurrentStep />
      <GetErrorMessege />  
    </>
  );
}

const mapStateToProps = (state) => ({
  step: state.step,
  errorMessege: state.errorMessege,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
  //setStoreLogin: (login) => dispatch(setStoreLogin(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
