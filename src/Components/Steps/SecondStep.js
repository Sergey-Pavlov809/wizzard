import React, { useState } from "react";
import { connect } from "react-redux";
import { setStoreSubType, incrementAction } from "../Actions/Actions";

function SecondStep(props) {
  const subType = ["free", "monthly", "annual"];
  const [selectedType, setSelectedType] = useState(subType[0]);

  const { step, setStoreSubType , incrementAction} = props;

  function nextStep(e) {
    e.preventDefault();
    console.log(selectedType);
    setStoreSubType(selectedType);
    incrementAction();
  }

  return (
    <>
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

});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  //decreaseAction: () => dispatch(decreaseAction()),
  setStoreSubType: (type) => dispatch(setStoreSubType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep);
