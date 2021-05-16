import {
  INCREMENT,
  DECREASE,
  SET_STORE_LOGIN,
  SET_STORE_PASSWORD,
  SET_SUB_TYPE,
  SET_NAME,
  SET_LAST_NAME,
  SET_PATRONYMIC,
  SET_DATE_OF_BIRTH,
  SET_EMAIL,
  SET_SEX,
  SET_CARD_NUMBER,
  SET_ERROR_MESSEGE
} from "./../ActionTypes/ActionTypes";

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}
export function decreaseAction() {
  return {
    type: DECREASE,
  };
}

export function setStoreLogin(login) {
  return {
    type: SET_STORE_LOGIN,
    payload: login,
  };
}

export function setStorePassword(password) {
  return {
    type: SET_STORE_PASSWORD,
    payload: password,
  };
}

export function setStoreSubType(type) {
  return {
    type: SET_SUB_TYPE,
    payload: type,
  };
}

export function setStoreName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}

export function setStoreLastName(lastName) {
  return {
    type: SET_LAST_NAME,
    payload: lastName,
  };
}

export function setStorePatronymic(patronymic) {
  return {
    type: SET_PATRONYMIC,
    payload: patronymic,
  };
}

export function setStoreDateOfBirth(date) {
  return {
    type: SET_DATE_OF_BIRTH,
    payload: date,
  };
}

export function setStoreEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email,
  };
}

export function setStoreSex(sex) {
  return {
    type: SET_SEX,
    payload: sex,
  };
}

export function setStoreCardNumber(number){
  return {
    type: SET_CARD_NUMBER,
    payload: number
  }
}

export function setErrorMessege(messege){
  return {
    type: SET_ERROR_MESSEGE,
    payload: messege,
  }
}
