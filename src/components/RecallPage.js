import logo from "../assets/img/logo.png"
import Cards from "./Cards";

const perguntas = [{ pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
{ pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
{ pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
{ pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
{ pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
{ pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
{ pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes ' },
{ pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }]

export default function RecallPage({ setTela }) {

    

    return (
        <div className="paginaRecall">
            <header onClick={() => setTela('home')}>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>

            <ul>

                <Cards  />


            </ul>

            <footer>
                <div className="textoFooter">0/4 CONCLUÍDOS</div>
            </footer>
        </div>


    );
}