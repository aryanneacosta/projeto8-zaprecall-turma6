import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Home from "./Home";
import RecallPage from "./RecallPage";

function App() {
    return (
        <>
        <RecallPage />
        </>
        
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));