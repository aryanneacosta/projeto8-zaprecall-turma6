import logo from "./assets/img/logo.png"

export default function RecallPage() {
    return (
        <div className="paginaRecall">
            <header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>

            <ul>
                <li className="recall">
                    <div className="pergunta">Pergunta 1</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>

                <li className="recall">
                    <div className="pergunta">Pergunta 1</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>

                <li className="recall">
                    <div className="pergunta">Pergunta 1</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>

                <li className="recall">
                    <div className="pergunta">Pergunta 1</div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
            </ul>

            <footer>
                <div className="textoFooter">0/4 CONCLUÍDOS</div>
            </footer>
        </div>


    );
}