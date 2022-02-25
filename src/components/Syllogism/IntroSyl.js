import React from "react";
import '../styles/Intro.css';

const IntroSyl = () => {
    return (
        <>
            <h1 className="intro-txt-title">
                Silogismo
                <span role="img" aria-label="prédio clássico" style={{ padding: "1%" }}>🏛️</span>
                <span role="img" aria-label="vaso grego">🏺</span>
            </h1>

            <p className="intro-paragraph">
                Na lição anterior, aprendemos algumas coisas básicas sobre lógica:
            </p>

            <ul className="intro-paragraph">
                <li style={{ marginBottom: "1%" }}>
                    <b>Proposições:</b> são frases afirmativas (ou seja, não são perguntas ou ordens) que podem ser ou verdadeiras ou falsas;
                </li>

                <li style={{ marginBottom: "1%" }}>
                    <b>Premisssas e conclusões:</b> são proposições relacionadas entre si: um conjunto de premissas serve de justificativa para uma conclusão;
                </li>

                <li style={{ marginBottom: "1%" }}>
                    <b>Argumentos:</b> são um conjunto coordenado que torna explícita as relações entre premissas e conclusões. Eles podem ser de dois tipos:
                    <ul>
                        <li style={{ marginTop: "0.5%" }}> <i>Deduções:</i> argumentos em que a conclusão se segue necessariamente das premissas;</li>
                        <li style={{ marginTop: "0.5%" }}> <i>Induções:</i> argumentos em que a conclusão <i>não</i> se segue necessariamente das premissas.</li>
                    </ul>
                </li>
            </ul>

            <p className='intro-paragraph'>
                Para tornar tudo isso um pouco mais fácil, um <a href='https://pt.wikipedia.org/wiki/Arist%C3%B3teles' target='_blanck'><u>cara</u></a> lá de dois mil anos atrás criou o <span className="highlight-txt">silogismo</span>.
                Ele consiste em analisar as proposições decompondo elas até não sobrarem mais do que alguns termos centrais, tais como: <span className='highlight-txt'>"todo", "nenhum", "algum", "não" e o verbo "ser"</span>.
            </p>

            <p className='intro-paragraph'>
                Por exemplo, a frase "estudantes geralmente dormem na aula" seria reescrita no silogismo como "<span className='highlight-txt'>alguns</span> estudantes <span className='highlight-txt'>são</span> dormentes em aula". O verbo "dormir" aqui foi substituído por "é dormente" porque, no silogismo, usa-se apenas
                o verbo "ser" junto com algum predicado.
            </p>

            <p className="intro-paragraph">
                Vamos dar uma olhada melhor nesssa proposição:
            </p>

            <ul className='intro-paragraph'>
                <li> <i>Algum:</i> esse termo significa que existe <span className='highlight-txt'>pelo menos um</span> estudante dorme durante a aula;</li>
                <li> <i>Estudantes:</i> isso é um <span className='highlight-txt'>termo geral</span> - isto é, ele representa vários indivíduos que possuem a propriedade de ser 'estudante'; </li>
                <li> <i>São:</i> acho que não preciso explicar esse...¯\_(ツ)_/¯</li>
                <li> <i>Dormentes em aula:</i> isso é outro termo geral. Geralmente, eles são representados por uma letra maiúscula. Nesse caso, a proposição poderia ser
                    reescrita assim: <span className='highlight-txt'>alguns E são D</span>.</li>
            </ul>

            <p className='intro-paragraph'>
                Existem também os <span className='highlight-txt'>termos individuais</span>, que representam indivíduos numa proposição (simbolizados por uma letra minúscula). Por exemplo, na frase "Julie não é
                uma estudante" ("j não é E"), "Julie" é um termo individual porque se refere a apenas uma pessoa. Proposições que começam com termos individuais <span className='highlight-txt'>não</span> podem
                ter "todos", "nenhum" ou "algum" ao mesmo tempo. Assim "toda Julie não é uma estudante" <span className='highlight-txt'>não é uma proposição bem formulada</span>.
                Outras proposições desse tipo incluem "todo A não é B" (ao invés, use "nenhum A é B"), "nenhum A não é B" (ao invés, use "todo A é B"), "A é B" e "A é c".
            </p>
        </>
    )
}

export default IntroSyl;