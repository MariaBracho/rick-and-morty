import Navigation from "./navigation";
import "./styles/main.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

const Application = (): JSX.Element => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Navigation />
      </HelmetProvider>
    </Provider>
  );
};

export default Application;
