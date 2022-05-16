import React from "react";
import setinha from "../assets/img/setinha.png"
import CardAnswer from "./CardAnswer";

export default function CardQuestion(props) {

    const [card, setCard] = React.useState('pergunta');

    return (
        <>
            {
                card === 'pergunta' ?
                    <li className="recall perguntaCard">
                        <div className="cardPergunta">
                            <div className="pergunta">{props.question}</div>
                            <img src={setinha} alt="setinha"  onClick={() => setCard('resposta')}/>
                        </div>
                    </li>
                    :
                    <CardAnswer num={props.num} answer={props.answer}/>
            }
        </>
    );
}

