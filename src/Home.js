import logo from "./assets/img/logo.png"

export default function Home() {
    return (
        <>
            <div className="paginaInicial">
                <img src={logo} alt='Logo' />
                <main>ZapRecall</main>
                <button><div className="textoBotao">Iniciar Recall!</div></button>
            </div>

        </>

    );
}