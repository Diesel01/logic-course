import React from "react"; 
import '../styles/Intro.css';

//////// Induction component
const InducExplanation = ({ answers, justifications }) => {
    return (
        <div>
            <h1 className = "intro-txt-title">Vc terminou! Estas foram suas respostas:</h1> 
            <ul>
                <li className = "intro-paragraph">Primeira pergunta: {answers.induc0}. A sua justificativa foi: {justifications.induc0}</li>
                <li className = "intro-paragraph">Segunda pergunta: {answers.induc1}. A sua justificativa foi: {justifications.induc1}</li>
                <li className = "intro-paragraph">Terceira pergunta: {answers.induc2}. A sua justificativa foi: {justifications.induc2}</li>
            </ul>

            <p className = "intro-paragraph"> Você percebeu como essas perguntas parecem fáceis? </p>

            <p className = "intro-paragraph">
                No entanto, elas não são óbvias, porque sempre existe a possibilidade de que a resposta que você acha certa está errada.
                Isso e o caso porque as <span className = "highlight-txt">premissas</span> (ou seja, as justificativas da sua resposta) nao sustentam completamente a conclusao.
            </p>

            <p className = "intro-paragraph">
                Nesse caso, dizemos que a conclusão <span className = 'highlight-text'>não se segue necessariamente das premissas</span>. O nome desse tipo de argumento é <span className = "highlight-txt">indução</span>.
            </p>

            <p className = "intro-paragraph">
                As induções são classificadas como <span className = "highlight-txt">"fortes"</span> ou "fracas". Por exemplo, imagine que durante toda a sua vida você só tenha tido aulas chatas de filosofia. Naturalmente, 
                você conclui que "todas as aulas de filosofia são chatas", porque até então você nunca teve uma boa aula. Essa é uma indução do tipo forte, porque as premissas fazem parecer 
                que a conclusão seja <span className = "highlight-txt">mais provável de ser verdadeira</span>. Ainda assim, imagine que, algum dia, você tenha uma aula boa de filosofia. Essa seria sua cara:
            </p>
            
            <img src = "./imgs/surprise.jpg" loading = 'lazy' alt = "Surprise modafoca" style = {{width: "35%", boxShadow: "7px 9px 0.4px 0px rgba(0, 0, 0, 0.15"}} />

            <p className = "intro-paragraph">
                Isso é o caso porque, por mais que a conclusão parece ser verdadeira, ainda pode acontecer que ela seja falsa. A razão para isso é que a conclusão nunca é necessária em uma indução.            
            </p>

            <p className = "intro-paragraph">
                Por outro lado, induções <span className = "highlight-txt">fracas</span> são aquelas cujas <span className = "highlight-txt">premissas não fazem com que a conclusão pareça ser mais provável de ser verdadeira</span>.
                Um exemplo disso é concluir que determinado remédio é eficaz com base em apenas um estudo. Essa é uma indução fraca porque, na ciência, precisamos de muitos e muitos estudos para concluir qualquer coisa. 
                Dizer que um remédio é eficaz a partir de só um estudo é apressado e uma indução fraca.  
            </p>

            <p className = "intro-paragraph"> Agora vamos ver outras perguntas que são de um tipo diferente. </p>
        </div>
    )
}

export {InducExplanation} 