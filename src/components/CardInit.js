export default function CardInit({ setClicked }) {
    return (
        <>
            <li className="recall" onClick={() => setClicked('face1')}>
                    <div className="pergunta">face2</div>
                    <ion-icon name="play-outline"></ion-icon>
            </li>
        </>
    );
}