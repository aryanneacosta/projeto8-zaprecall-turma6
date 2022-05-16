import React from "react";
import CardQuestion from "./CardQuestion";

export default function CardInit(props) {

    const [card, setCard] = React.useState('inicial');

    return (
        <>
            {
                card === 'inicial' ?
                    <li className="recall" onClick={() => setCard('pergunta')}>
                        <div className="cardInicial">
                            <div className="pergunta">Pergunta {props.num}</div>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </li>
                    :
                    <CardQuestion num={props.num} question={props.question} answer={props.answer}/>
            }
        </>
    );

}