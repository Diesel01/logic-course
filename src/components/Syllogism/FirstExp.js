import React from "react";

const FirstExp = ({ answers, correctAnswers }) => {
    return (
        <>
            <h1 className="intro-txt-title">Você terminou! Estas foram suas respostas:</h1>

            <ul className="intro-paragraph">
                <li> <b>Primeira pergunta</b>: {answers.silog0}
                    <ul>
                        <li style={{ marginBottom: "1%" }}> <b>A alternativa correta era:</b> {correctAnswers.silog0}</li>
                    </ul>
                </li>

                <li> <b>Segunda pergunta</b>: {answers.silog1}
                    <ul>
                        <li style={{ marginBottom: "1%" }}> <b>A alternativa correta era:</b> {correctAnswers.silog1}</li>
                    </ul>
                </li>

                <li> <b>Terceira pergunta</b>: {answers.silog2}
                    <ul>
                        <li style={{ marginBottom: "1%" }}> <b>A alternativa correta era:</b> {correctAnswers.silog2}</li>
                    </ul>
                </li>
            </ul>

            <p className='intro-paragraph'>
                Agora você sabe um pouquinho melhor como formalizar um argumento. Isso é um passo importante para analisar se o argumento é <span className='highlight-txt'>válido</span>
                (isto é, se as premissas sustentam a conclusão). Vamos pegar o terceiro argumento como exemplo:
            </p>

            {/* <p className = 'intro-paragraph'>
                Como vimos, existem apenas algumas proposições de um silogismo: "todo A é B", "nenhum A é B", "algum A é B" e "algum A não é B". As duas primeiras são chamadas 
                de <span className = 'highlight-txt'>proposições universais</span>, enquanto que as segundas <span className = 'highlight-txt'>proposições particulares</span>. 
                Além disso, nós podemos classificar as proposições de um silogismo em <span className = 'highlight-txt'>afirmativas</span> ("todo A é B" e "algum A é B") e <span className = 'highlight-txt'>negativas</span> 
                ("nenhum A é B" e "algum A não é B"). 
             </p> */}

            {/* <p className = 'intro-paragraph'>
                Você já deve ter visto em matemática os chamados <a href = 'https://pt.wikipedia.org/wiki/Diagrama_de_Venn' target = '_blanck'><u>diagramas de Venn</u></a>. Eles também são muito úteis
                para representar as relações entre proposições de um silogismo e, como consequência, verificar se o argumento é válido.
            </p> */}

            <ul className='intro-paragraph'>
                <li>Todo comunista favorece pobres. (Todo C é F)</li>
                <li>Todo antirracista favorece os pobres. (Todo A é F)</li>
                <li><i>Logo,</i> todo antirracista é comunista. (Todo A é C)</li>
            </ul>

            <p className='intro-paragraph'>
                Olhando para as proposições, podemos perceber que elas todas são da forma "todo X é Y".
                Essa forma se chama <span className='highlight-txt'>universal afirmativa</span> e pode ser
                representada <a href='https://pt.wikipedia.org/wiki/Diagrama_de_Venn' target='_blanck'><u>assim</u></a>:
            </p>

            <div style={{ alignSelf: 'center', justifySelf: 'center', margin: 'auto', width: '100%' }}>
                <img style={{ marginRight: '1%', marginBottom: '1%' }} src='imgs/diagramasSilogismo/DiagramaTodoCF.svg' alt='Diagrama com um círculo maior, representando a classe de comunistas, que contém um círculo menor, o qual representa a classe de favorecedores de pobres'></img>
                <img style={{ marginRight: '1%', marginBottom: '1%' }} src='imgs/diagramasSilogismo/DiagramaTodoAF.svg' alt='Diagrama com um círculo maior, representando a classe de antirracistas, que contém um círculo menor, o qual representa a classe de favorecedores de pobres'></img>
                <img style={{ marginRight: '1%', marginBottom: '1%' }} src='imgs/diagramasSilogismo/DiagramaTodoAC.svg' alt='Diagrama com um círculo maior, representando a classe de comunistas, que contém um círculo menor, o qual representa a classe de antirracistas'></img>
            </div>

            <p className='intro-paragraph'>
                Olhando pros diagramas, você consegue perceber que há algo de errado com a conclusão? Ela afirma que existe uma relação entre os "antirracistas" e "comunistas", mas nada nas premissas
                faz com que ela seja verdadeira. Isso é o caso porque as premissas não afirmam nada relacionado à relação entre "comunistas" e "antirracistas", mas apenas que ambos possuem uma
                predicado em comum (a saber, "favorecer os pobres").
            </p>

            <p className='intro-paragraph'>
                Existem outros argumentos da mesma forma e que são mais fáceis de perceber que são inválidos. Por exemplo:
            </p>

            <ul className='intro-paragraph'>
                <li>Todo cachorro é feio. (Todo C é F)</li>
                <li>Todo avestruz é feio. (Todo A é F)</li>
                <li><i>Logo,</i> todo avestruz é um cachorro. (Todo A é C) <span aria-label='carinha confusa'>🤔</span> </li>
            </ul>

            <p className='intro-paragraph'>
                Esses argumentos são inválidos, mas muito frequentes em certos discursos políticos e nas redes sociais (especialmente quando são ditos com uma linguagem exatalda e com forte retórica).
                A lógica é uma excelente ferramenta para que esse tipo de discurso não nos engane a acreditar em coisas falsas ou sem fundamento - analisando a forma do discurso, conseguimos driblar
                essas tentativas de enganação.
            </p>
        </>
    )
}

export default FirstExp;