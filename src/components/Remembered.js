export default function Remembered(props) {
    return (
        <>
            <li className="recall">
                <div className="cardInicial lembrei">
                    <div className="pergunta">Pergunta {props.num}</div>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </li>

            {/* <li className="recall">
                <div className="cardInicial naoLembrei">
                    <div className="pergunta">Pergunta {props.num}</div>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            </li>

            <li className="recall">
                <div className="cardInicial quaseLembrei">
                    <div className="pergunta">Pergunta {props.num}</div>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            </li> */}
        </>
    );
}

