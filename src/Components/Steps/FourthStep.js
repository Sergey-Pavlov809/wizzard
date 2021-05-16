import React, { useState } from "react";
import { connect } from "react-redux";
import {incrementAction, setStoreCardNumber,setErrorMessege} from "../Actions/Actions";
import Cleave from 'cleave.js/react';


function FourthStep(props){

    const [cardNumber,setCardNumber] = useState();

    const {incrementAction, setStoreCardNumber, setErrorMessege} = props;

    function nextStep(e){
        e.preventDefault();
        if(checkValidation()) {
            setStoreCardNumber(cardNumber)
            incrementAction();
            setErrorMessege(" ")
        }


    }

    function checkValidation(){
        if(cardNumber.toString().length !== 15) {
            setErrorMessege("проверьте номер карты")
            return true;
        }
        
        return false
    }

   // document.getElementById('123').addEventListener('keyup', function(){
   // this.value = this.value.replace(/[^\d]/g, '');
   //});

    return<>
    <form onSubmit={(e) => nextStep(e)}>
    <p>Введите номер карты</p>
        <Cleave required placeholder="xxxx xxxxx xxxxxx"
                options={{creditCard: true}}
                onChange={(e) => setCardNumber(e.target.value)}  />
        <button type="submit">next step</button>
    </form>
    </>
}

const mapStateToProps = (state) => ({
    step: state.step,
    cardNumber: state.cardNumber
  });
  
  const mapDispatchToProps = (dispatch) => ({
    incrementAction: () => dispatch(incrementAction()),
    setStoreCardNumber: (number) => dispatch(setStoreCardNumber(number)),
    setErrorMessege: (messege) => dispatch(setErrorMessege(messege))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FourthStep);
  