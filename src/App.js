import React from "react";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import Home from "./components/Home";
import RecallPage from "./components/RecallPage";


export default function App() {

    const [tela, setTela] = React.useState('home');

    return (
        <>
        {/* fazer ternário para mudar de página */}
        {
            tela === 'home' ? <Home setTela={setTela} /> : <RecallPage setTela={setTela}/>
        }
        
        </>
        
    );
}