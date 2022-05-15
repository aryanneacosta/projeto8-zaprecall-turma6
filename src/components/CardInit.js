import React from "react";
import CardQuestion from "./CardQuestion";


export default function CardInit(props) {

    const [card, setCard] = React.useState('inicial');

    return (
        <>
            {
                card === 'inicial' ?
                    <li className="recall" onClick={() => setCard('pergunta')}>
                        <div className="pergunta">Pergunta {props.num}</div>
                        <ion-icon name="play-outline"></ion-icon>
                    </li>
                    :
                    <CardQuestion question={props.question}/>
            }
        </>


    );

}