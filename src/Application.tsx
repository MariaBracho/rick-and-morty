import Navigation from "./navigation";
import "./styles/main.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const Application = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default Application;
