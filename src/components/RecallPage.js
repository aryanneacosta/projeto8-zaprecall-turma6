import logo from "../assets/img/logo.png"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"
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
                <CardInit num={perguntas[0].num} question={perguntas[0].pergunta} answer={perguntas[0].resposta} />
                <CardInit num={perguntas[1].num} question={perguntas[1].pergunta} answer={perguntas[1].resposta} />
                <CardInit num={perguntas[2].num} question={perguntas[2].pergunta} answer={perguntas[2].resposta} />
                <CardInit num={perguntas[3].num} question={perguntas[3].pergunta} answer={perguntas[3].resposta} />
                <CardInit num={perguntas[4].num} question={perguntas[4].pergunta} answer={perguntas[4].resposta} />
                <CardInit num={perguntas[5].num} question={perguntas[5].pergunta} answer={perguntas[5].resposta} />
                <CardInit num={perguntas[6].num} question={perguntas[6].pergunta} answer={perguntas[6].resposta} />
                <CardInit num={perguntas[7].num} question={perguntas[7].pergunta} answer={perguntas[7].resposta} />


                {/* {perguntas.map((num, index) => <CardInit num={perguntas[index].num} key={index}/>)} */}

            </ul>

            <footer>
                {/* footer padrão */}

                <div className="footer">
                    <div className="textoFooter">{`0/${perguntas.length} CONCLUÍDOS`}</div>
                </div>

                {/* footer parabéns */}

                {/* <div className="parabensFooter">
                    <div className="titulo">
                        <img src={party} alt="party" />
                        <p>Parabéns!</p>
                    </div>
                    <div className="texto">Você não esqueceu de nenhum flashcard!</div>
                    <div className="textoFooter">{`0/${perguntas.length} CONCLUÍDOS`}</div>
                </div> */}

                {/* footer putz */}

                {/* <div className="putzFooter">
                    <div className="titulo">
                        <img src={sad} alt="sad" />
                        <p>Putz...</p>
                    </div>
                    <div className="texto">
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                    </div>
                    <div className="textoFooter">{`0/${perguntas.length} CONCLUÍDOS`}</div>
                </div> */}

            </footer>
        </div>
    );
}