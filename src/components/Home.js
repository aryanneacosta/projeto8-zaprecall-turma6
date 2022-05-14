import logo from "../assets/img/logo.png"

export default function Home({ setTela }) {
    return (
        <>
            <div className="paginaInicial">
                <div className="paginaInicialTemplate">
                    <img src={logo} alt='Logo' />
                    <main>ZapRecall</main>
                    <button onClick={() => setTela('recall')}><div className="textoBotao">Iniciar Recall!</div></button>
                </div>

            </div>

        </>

    );
}