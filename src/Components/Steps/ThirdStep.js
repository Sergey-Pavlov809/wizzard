import React, { useState } from "react";
import { connect } from "react-redux";
import { setStoreDateOfBirth, setStoreEmail, setStoreSex, incrementAction, setStoreLastName, setStoreName, setStorePatronymic } from '../Actions/Actions';

function ThirdStep(props) {
  const sexTyps = ['м','ж'];

  const [name,setName] = useState();
  const [lastName, setLastName] = useState();
  const [patronymic, setPatronymic] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState();
  const [sex, setSex] = useState(sexTyps[0]);

  const { step, setStoreName , setStoreLastName, setStorePatronymic, setStoreDateOfBirth, setStoreEmail, setStoreSex, incrementAction} = props;



  function nextStep(e){
    //console.log(name, lastName,email)
    e.preventDefault();
    setStoreName(name);
    setStoreLastName(lastName);
    setStorePatronymic(patronymic);
    setStoreDateOfBirth(dateOfBirth);
    setStoreEmail(email);
    setStoreSex(sex);
    incrementAction();
  }

  function checkValidation(){

  }

  return (
    <>
      <form onSubmit={nextStep}>
      <div>name:</div>
        <input
          type="text"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <div>last name:</div>
        <input
          type="text"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <div>patronymic:</div>
        <input
          type="text"
          onChange={(e) => {
            setPatronymic(e.target.value);
          }}
        ></input>
        <div>date of birth:</div>
        <input
          type="date"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        ></input>
        <div>email:</div>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
                <select onChange={(e) => setSex(e.target.value)}>
          {sexTyps.map((el, counter) => {
            return <option key={counter}>{el}</option>;
          })}
        </select>
        <input type="checkbox" required></input><div>больше ли тебе 18?</div>
        <button type="submit">next step</button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => ({
  step: state.step,
  name: state.name,
  lastName: state.lastName,
  patronymic: state.patronymic,
  dateOfBirth: state.dateOfBirth,
  email: state.email,
  sex: state.sex
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  setStoreName: (name) => dispatch(setStoreName(name)),
  setStoreLastName: (lastName) => dispatch(setStoreLastName(lastName)),
  setStorePatronymic: (patronymic) => dispatch(setStorePatronymic(patronymic)),
  setStoreDateOfBirth: (date) => dispatch(setStoreDateOfBirth(date)),
  setStoreEmail: (email) => dispatch(setStoreEmail(email)),
  setStoreSex: (sex) => dispatch(setStoreSex(sex))

});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);
