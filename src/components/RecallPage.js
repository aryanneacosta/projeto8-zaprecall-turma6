import logo from "../assets/img/logo.png"
import CardInit from "./CardInit";



const perguntas = [{ num: '1', pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
{ num: '2', pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
{ num: '3', pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
{ num: '4', pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
{ num: '5', pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
{ num: '6', pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
{ num: '7', pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes ' },
{ num: '8', pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }]




export default function RecallPage({ setTela }) {



    return (
        <div className="paginaRecall">
            <header onClick={() => setTela('home')}>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>

            <ul>

            {perguntas.map((num, index) => <CardInit num={perguntas[index].num} key={index}/>)}

            </ul>

            <footer>
                <div className="textoFooter">0/4 CONCLUÍDOS</div>
            </footer>
        </div>


    );
}



// EU TINHA PENSADO EM FAZER UM PROPS.ONCLICK PARA PASSAR O ONCLICK COMO PARÂMETRO E PODER CLICAR, DAÍ A PARTIR DISSO
//NÃO SEI COMO O TERNÁRIO FUNCIONÁRIA, MAS PARA CADA CLICK NA CARTA A FUNÇÃO ONCLICK/TIPO DA CARTA MUDARIA BASEADO NO
//FIGMA E NA QUANTIDADE DE CLICKS E ONDE CLICOU