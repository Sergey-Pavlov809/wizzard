import "./styles.css";
import Wizard from "./Wizard";
import { Provider } from "react-redux";
import store from "./Components/Store/DataStore";

export default function App() {
  return (
    <Provider store={store}>
      <Wizard />
    </Provider>
  );
}
