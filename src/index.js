import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <HashRouter>
          <App />
        </HashRouter>
);
