import React, { useState } from "react";
import { connect } from "react-redux";

import { incrementAction } from "./../Actions/Actions";

function FifthStep(props){

    const { login, email, incrementAction,  } = props;

    function nextStep(e){
        e.preventDefault();
        incrementAction();
    }

    return(<>
        <p>вы ввели логин:{login}</p>
        <p>вы ввели email:{email}</p>
        
        <form onSubmit={(e) => nextStep(e)}>
            <input type="checkbox" required></input><div>согласен на обработку персональных данных</div>
            <input type="checkbox" required></input><div>согласен на использование куки</div>
            <input type="checkbox" required></input><div>продаю душу дьяволу</div>
            <button type="submit">next step</button>
        </form>
    </>)

}

const mapStateToProps = (state) => ({
    step: state.step,
    login: state.login,
    email: state.email,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    incrementAction: () => dispatch(incrementAction()),
    //decreaseAction: () => dispatch(decreaseAction()),

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FifthStep);
  