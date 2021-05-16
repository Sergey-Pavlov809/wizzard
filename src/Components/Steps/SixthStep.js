import React, { useState } from "react";
import { connect } from "react-redux";

import {incrementAction} from "../Actions/Actions";

function SixthStep(props){

    const { login, email, name, lastName, subscribeType, patronymic, dateOfBirth, sex, cardNumber, incrementAction,  } = props;

    function nextStep(e){
        e.preventDefault();
        incrementAction();
    }

    return <>
        <p>вы заполнили поля:</p>
        <p>login: {login}</p>
        <p>email: {email}</p>
        <p>name: {name}</p>
        <p>last Name: {lastName}</p>
        <p>sub type: {subscribeType}</p>
        <p>patronymic: {patronymic}</p>
        <p>date of birth: {dateOfBirth}</p>
        <p>sex:{sex}</p>
        <p>card number:{cardNumber}</p>

    </>
}

const mapStateToProps = (state) => ({
    step: state.step,
    subscribeType: state.subscribeType,
    //login: state.login,
    //password: state.password
    login: state.login,
    email: state.email,
    name: state.name,
    lastName: state.lastName,
    patronymic: state.patronymic,
    sex: state.sex,
    cardNumber: state.cardNumber,
    dateOfBirth: state.dateOfBirth,

  });
  
  const mapDispatchToProps = (dispatch) => ({
    //incrementAction: () => dispatch(incrementAction()),
    //decreaseAction: () => dispatch(decreaseAction()),
    //setStoreLogin: (login) => dispatch(setStoreLogin(login)),
    //setStorePassword: (password) => dispatch(setStorePassword(password))
    //setStoreSubType: (type) => dispatch(setStoreSubType(type)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SixthStep);
  