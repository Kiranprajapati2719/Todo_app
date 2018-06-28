import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(AppRouter, document.getElementById("root"));
registerServiceWorker();
