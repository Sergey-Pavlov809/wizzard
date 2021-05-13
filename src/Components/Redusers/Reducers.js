const initialState = {
  step: 1,
  login: "",
  password: "",
  subscribeType: "free",
  firstName: "",
  lastName: "",
  patronymic: "",
  dateOfBirth: "",
  email: "",
  sex: "",
  ageThreshold: false,
  cardNumber: "",
};

function addReducer(state = initialState, action) {
  //debugger;
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, step: state.step + 1 };
    case "DECREASE":
      return { ...state, step: state.step - 1 };
    case "SET_STORE_LOGIN":
      return { ...state, login: action.payload };
    case "SET_STORE_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SUB_TYPE":
      return { ...state, subscribeType: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_PATRONYMIC":
      return { ...state, patronymic: action.payload };
    case "SET_DATE_OF_BIRTH":
      return { ...state, dateOfBirth: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_SEX":
      return { ...state, sex: action.payload };
    default:
      return state;
  }
}

export default addReducer;
