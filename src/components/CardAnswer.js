import React from "react";
import IsItRight from "./IsItRight";

export default function CardAnswer(props) {

    const [answer, setAnswer] = React.useState('naorespondido');

    return (
        <>
            {answer === 'naorespondido' ?
                <li className="recall respostaCard">
                    <div className="cardResposta">
                        <div className="pergunta">{props.answer}</div>
                        <div className="botoesZap">
                            <div className="botao verde" onClick={() => setAnswer('lembrei')}>Zap</div>
                            {/* <div className="botao amarelo" onClick={() => setAnswer('quaselembrei')}>Quase não lembrei</div>
                            <div className="botao verde" onClick={() => setAnswer('lembrei')}>Zap!</div> */}
                        </div>
                    </div>
                </li>
                :
                <IsItRight num={props.num}/>
            }
        </>
    );
}