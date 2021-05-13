import "./styles.css";
import Wizard from "./Wizard";
import { Provider } from "react-redux";
import store from "./Components/Store/DataStore";

export default function App() {
  //console.log(store.getState())
  return (
    <Provider store={store}>
      <button onClick={() => store.getState()}>get state</button>
      <Wizard />
    </Provider>
  );
}
