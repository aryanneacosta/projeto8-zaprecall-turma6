import React from "react";

import CardInit from "./CardInit";

export default function Cards() {

    const [clicked, setClicked] = React.useState('face1');

    return (
        <>
            {clicked === 'face1'
                ?

                <li className="recall" onClick={() => setClicked('face2')}>
                    <div className="pergunta">face1</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                :
                <li className="recall" onClick={() => setClicked('face1')}>
                    <div className="pergunta">face2</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>

            }
        </>

    );
}

