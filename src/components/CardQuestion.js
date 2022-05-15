import React from "react";

export default function CardQuestion(props) {
    return (
        <>
            <li className="recall">
                <div className="pergunta">{props.question}</div>
                <ion-icon name="play-outline"></ion-icon>
            </li>
        </>
    );
}

