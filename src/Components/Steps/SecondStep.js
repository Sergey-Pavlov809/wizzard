import React, { useState } from "react";
import { connect } from "react-redux";
import { setStoreSubType } from "../Actions/Actions";

function SecondStep(props) {
  const subType = ["free", "monthly", "annual"];
  const [selectedType, setSelectedType] = useState();

  const { step, setStoreSubType } = props;

  function nextStep(e) {
    e.preventDefault();
    console.log(selectedType);
    setStoreSubType(selectedType);
  }

  return (
    <>
      {selectedType}
      <form
        onSubmit={(e) => {
          nextStep(e);
        }}
      >
        <select onChange={(e) => setSelectedType(e.target.value)}>
          {subType.map((el, counter) => {
            return <option key={counter}>{el}</option>;
          })}
        </select>
        <button type="submit">nextStep</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  step: state.step,
  //subscribeType: state.subscribeType,
  //login: state.login,
  //password: state.password
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  //setStoreLogin: (login) => dispatch(setStoreLogin(login)),
  //setStorePassword: (password) => dispatch(setStorePassword(password))
  setStoreSubType: (type) => dispatch(setStoreSubType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep);
