import React, { useState } from "react"; 
import '../styles/Intro.css';

//////// Intro text
const IntroTxt = () => {
    return (
        <>
            <h1 className="intro-txt-title">
                Antes de começarmos...
            </h1>

            <p className='intro-hello'>
                Olá!
                <span role="img" aria-label="oi" style={{ padding: "1%" }}>👋</span>
            </p>

            <p className="intro-paragraph">
                Suponho que tenha caído aqui por um link.
                E provavelmente esse link estava no painel de sua turma ou algo do gênero, junto com alguma mensagem de convocação de sua professora,
                assim por diante.
            </p>

            <p className="intro-paragraph">
                Bom...
            </p>

            <p className="intro-paragraph">
                Não entenda isso como um inconveniente; apesar de certo ar formal que o nome “lógica” transpareça,
                acredite: trabalhamos bastante para que todo o conteúdo que você verá a seguir seja conveniente e engajante.
                Aqui, iremos te apresentar um jeito com o qual você pode pensar e defender as suas crenças de modo claro e bem-feito.
                Nossa principal tarefa sempre foi e sempre será <span className="highlight-txt">evitar o  raciocínio mal-feito</span>.
            </p>

            <p className="intro-paragraph">
                Todo esse “curso” que vocês terão será em cima de suas escolhas durante um caminho que preparamos para vocês.
                Não queremos obrigar vocês a nada, apenas queremos mostrar com mais calma e clareza algo que de certa maneira vocês já conhecem
                e já se depararam em outros contextos.
            </p>

            <p className="intro-paragraph">
                Nesse primeiro momento, iremos partir da noção que toda ideia precisa de uma <span className="highlight-txt">justificativa</span>.
                A lógica nada mais é o estudo de como certas ideias conseguem sustentar outras. Além disso, com a lógica podemos criar justificativas para nossas crenças.
                Para isso, precisamos ter em mente algumas coisas bem importantes: 
            </p>

            <ul className="intro-paragraph">
                <li>
                    <b>Proposição:</b>  proposições são frases que <span className = "highlight-txt">afirmam</span> alguma coisa. 
                    Elas não são perguntas nem ordens, porque elas servem para informar alguma coisa.
                    Desse modo, proposições apenas podem ser  <span className = "highlight-txt">verdadeiras ou falsas</span>.
                </li>

                <li>
                    <b>Premissas:</b> elas são proposições <span className = "highlight-txt">usadas para sustentar, ou justificar, outras proposições</span>.
                </li>

                <li>
                    <b>Conclusões:</b> elas são proposições que são sustentadas por premissas. Geralmente <span className = "highlight-txt">elas não são óbvias por si mesmas, por isso precisam de premissas para
                        serem sustentadas</span>. Por exemplo, imagine que você está tentando convencer o seu amigo que cachorros são melhores que gatos. 
                        Você pode dizer coisas como "cachorros são mais brincalh~oes", "gatos são mais difíceis de cuidar" ,"cachorros são mais companheiros" e etc. 
                        Nesse caso, você está oferecendo premissas, ou razões, que sustentam a conclusão que "cachorros são melhores que gatos".
                </li>

                <li>
                    <b>Argumentos:</b> argumentos nada mais são que um conjunto de proposições, onde algumas servem de premissas, outras de conclusão.
                </li>
            </ul>

            <p className="intro-paragraph">
                Agora vamos olhar como dois tipos de argumentos funcionam: <span className="highlight-txt">indução</span> e <span className="highlight-txt">dedução</span>.
            </p>
        </>
    )
}


//////// Induction component
const InducExplanation = ({ answers, justifications }) => {
    const [displayImg, setDisplayImg] = useState(false)

    return (
        <>
            <h1 className = "intro-txt-title">Você terminou! Estas foram suas respostas:</h1> 

            <ul>
                <li className = "intro-paragraph">Primeira pergunta: {answers.induc0}. A sua justificativa foi: {justifications.induc0}</li>
                <li className = "intro-paragraph">Segunda pergunta: {answers.induc1}. A sua justificativa foi: {justifications.induc1}</li>
                <li className = "intro-paragraph">Terceira pergunta: {answers.induc2}. A sua justificativa foi: {justifications.induc2}</li>
            </ul>

            <p className = "intro-paragraph"> Você percebeu como essas perguntas parecem fáceis? </p>

            <p className = "intro-paragraph">
                No entanto, elas não são óbvias, porque sempre existe a possibilidade de que a resposta que você acha certa está errada.
                Isso é o caso porque as <span className = "highlight-txt">premissas</span> (ou seja, as justificativas da sua resposta) nao sustentam completamente a conclusao.
            </p>

            <p className = "intro-paragraph">
                Nesse caso, dizemos que a conclusão <span className = 'highlight-text'>não se segue necessariamente das premissas</span>. O nome desse tipo de argumento é <span className = "highlight-txt">indução</span>.
            </p>

            <p className = "intro-paragraph">
                As induções são classificadas como <span className = "highlight-txt">"fortes" ou "fracas"</span>. Por exemplo, imagine que durante toda a sua vida você só tenha tido aulas chatas de filosofia. Naturalmente, 
                você conclui que "todas as aulas de filosofia são chatas", porque até então você nunca teve uma boa aula. Essa é uma indução do tipo <span className = "highlight-txt">forte</span>, porque as premissas fazem parecer 
                que a conclusão seja <span className = "highlight-txt">mais provável de ser verdadeira</span>. Ainda assim, imagine que, algum dia, você tenha uma aula boa de filosofia.
                 <span onClick = { () => { displayImg ? setDisplayImg(false) : setDisplayImg(true)} } tabIndex = "1">  
                    <u>Essa provavelmente seria sua cara</u> 
                </span>.
            </p>
            
            <img src = "./imgs/surprise.jpg" 
                hidden = {displayImg ? false : true}
                loading = 'lazy' 
                alt = "Surprise modafoca" 
                className = "induc-exp-img"
            />

            <p className = "intro-paragraph">
                Isso é o caso porque, por mais que a conclusão parece ser verdadeira, ainda pode acontecer que ela seja falsa. A razão para isso é que a conclusão nunca é necessária em uma indução.            
            </p>

            <p className = "intro-paragraph">
                Por outro lado, induções <span className = "highlight-txt">fracas</span> são aquelas cujas <span className = "highlight-txt">premissas não fazem com que a conclusão pareça ser mais provável de ser verdadeira</span>.
                Um exemplo disso é concluir que determinado remédio é eficaz com base em apenas um estudo. Essa é uma indução fraca porque, na ciência, precisamos de muitos e muitos estudos para concluir qualquer coisa. 
                Dizer que um remédio é eficaz a partir de só um estudo é apressado e uma indução fraca.  
            </p>

            <p className = "intro-paragraph"> Agora vamos ver outras perguntas que são de um tipo diferente. </p>
        </>
    )
}


///////Deduction explanation
const DeducExplanation = ({answers, justifications}) => {
    return (
        <div>
            <h1 className = "intro-txt-title">Você terminou! Estas foram suas respostas:</h1> 

            <ul>
                <li className = "intro-paragraph">Primeira pergunta: {answers.deduc0}. A sua justificativa foi: {justifications.deduc0}</li>
                <li className = "intro-paragraph"> Segunda pergunta: {answers.deduc1}. A sua justificativa foi: {justifications.deduc1}</li>
                <li className = "intro-paragraph">Terceira pergunta: {answers.deduc2}. A sua justificativa foi: {justifications.deduc2}</li>
            </ul>

            <p className = "intro-paragraph">
                Você certamente percebeu que não havia muita opção nessas perguntas. Uma vez que você entendeu o enunciado, 
                a resposta se segue <span className = "highlight-txt">necessariamente</span>. 
                É essa a principal característica de uma <span className = "highlight-txt">dedução</span>.
            </p>

            <p className = "intro-paragraph">
                Ao contrário de induções, que podem ser classificadas como fortes ou fracas, deduções são sempre <span className = "highlight-txt">válidas</span>. 
                Argumentos válidos são aqueles cuja conclusão se segue necessariamente das premissas - ao passo que isso não acontece em argumentos <span className = "highlight-txt">inválidos</span>.
                Todas as perguntas que você respondeu agora foram argumentos válidos - você apenas selecionou as conclusões que se seguiam das premissas.
                Aqui está um exemplo de um argumento inválido:
            </p>

            <img 
                src = "./imgs/meme_argInvalido.jpg" 
                loading = "lazy"
                alt = "Se brasileiro é uma nacionalidade, e argentino é uma nacionalidade, isso quer dizer que brasileiros são argentinos?" 
                className = "deduc-exp-img"
            />

            <p className = 'intro-paragraph'>
                Imagine o caos que seria se brasileiros fossem argentinos! Vamos decompor esse argumento: 
            </p>

            <ul>
                <li className = 'intro-paragraph'> <i>Premissa 1:</i> Brasileiro é uma nacionalidade;</li>
                <li className = 'intro-paragraph'> <i>Premissa 2:</i> Argentino é uma nacionalidade;</li>
                <li className = 'intro-paragraph'> <i>Logo, </i> brasileiros são argentinos.</li>
            </ul>

            <p className = "intro-paragraph">
                Esse argumento é inválido porque, mesmo se as premissas 1 e 2 sejam verdadeiras, não é o caso que a conclusão seja verdadeira. Nesse caso, 
                para que as ṕremissas realmente suportem a conclusão, precisaríamos de uma premissa adicional (algo como "todas as nacionalidades são iguais" - o que, 
                óbviamente, é uma loucura).  
            </p>
        </div>
    )
}

export {IntroTxt, InducExplanation, DeducExplanation} 