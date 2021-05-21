const inductionsQuestionsArray = [
    {
        id: "induc0",
        txt: [
            "Seu amigo Henrique te convidou para uma festa nesse final de semana. Quase todas as outras vezes que você saiu com ele, vocês foram a lugares onde tocava somente músicas sertanejas.", 
            "Embora você goste de sair com ele e o resto do pessoal, você odeia sertanejo e não iria na festa se esse tipo de música tocasse lá.", 
            "Henrique não te disse qual música vai tocar nessa festa. Com base nisso, qual tipo de música você acha que vai ser tocada? "            
        ],
        options: [
            { opt: "induc0_opt0", txt: "Eletrônica", justifs: ["Eletrônica é um tipo de música popular", "Outras pessoas do grupo gostam de eletrônica", "Uma vez houve uma festa de eletrônica com ele"] },
            { opt: "induc0_opt1", txt: "Sertanejo", justifs: ["Quase sempre nas festas dele toca sertanejo", "Sertanejo é um tipo de música popular", "Outras pessoas do grupo gostam de sertanejo"] },
            { opt: "induc0_opt2", txt: "Funk", justifs: ["Funk é um tipo de música popular", "Outras pessoas do grupo gostam de funk", "Uma vez houve uma festa de funk com ele"] }
        ],
    },

    {
        id: "induc1",
        txt: [
            "Você está em casa, conversando com alguns amigos por mensagem. Um dos seus amigos, Pedro, está te respondendo quase no mesmo tempo que você envia uma mensagem. Enquanto isso, sua amiga Carol tem demorado bastante tempo para te responder.", 
            "De repente, a internet da sua casa fica fora do ar. Você não pode ligar os dados móveis porque seu celular não tem mais crédito.", 
            "Assim que a internet voltar, de quem você acha que vai receber uma mensagem?"
        ],
        options: [
            { opt: "induc1_opt0", txt: "Pedro", justifs: ["Se ele estava respondendo antes, é provável que responda depois", "A internet de Carol também deve estar ruim, por isso ela não me responderia depois"] },
            { opt: "induc1_opt1", txt: "Carol", justifs: ["Ela deveria estar ocupada antes, mas agora está livre para me responder", "A internet de Pedro também deve estar ruim, por isso ele não me responderia depois"] }
        ]
    },

    {
        id: "induc2",
        txt: [
            "É o dia do ENEM. Você está sentado na sala, somente esperando que a prova comece logo. Entediado e sem celular, você começa a olhar as pessoas ao seu redor.",
            "Dentre elas, você percebe que uma colega de colégio, Martina, que sempre foi excelente em matemática e também não era ruim em português e literatura.", 
            "Qual curso você acha que Martina irá fazer na universidade?"
        ],
        options: [
            { opt: "induc2_opt0", txt: "Matemática", justifs: ["Geralmente, as pessoas boas em matemática escolhem esse curso", "Se ela tem habilidades para matemática, ela deveria desenvolver mais isso", "Eu acho que ela gostaria desse curso"] },
            { opt: "induc2_opt1", txt: "Engenharia civil", justifs: ["Geralmente, as pessoas boas em matemática escolhem esse curso", "Se ela tem habilidades para matemática, ela deveria ser engenheira para ganhar dinheiro", "Eu acho que ela gostaria desse curso"] },
            { opt: "induc2_opt2", txt: "Letras", justifs: ["Ela parecia gostar das aulas de literatura", "Ela sempre estava com um livro embaixo do braço", "Ela me mencionou uma vez que gostava de português"] }
        ]
    }
]

const deductionQuestionsArray = [
    {
        id: "deduc0",
        txt: ["Todo meme é dank.", "Esse site é um meme.", "Logo?"],
        options: [
            { opt: "deduc0_opt0", txt: "Todo meme é esse site", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] },
            { opt: "deduc0_opt1", txt: "Esse site é dank", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas tinham palavras que não estavam no enunciado", "Se o enunciado fosse verdadeiro, essa alternativa também tinha que ser"] },
            { opt: "deduc0_opt2", txt: "Esse site não é dank", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] }
        ]
    },

    {
        id: "deduc1",
        txt: ["Todo youtuber fala alto.", "PC Siqueira é um youtuber.", "Logo?"],
        options: [
            { opt: "deduc1_opt0", txt: "PC Siqueira é uma galinha", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] },
            { opt: "deduc1_opt1", txt: "Felipe Neto fala alto", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] },
            { opt: "deduc1_opt2", txt: "PC Siqueira fala alto", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas tinham palavras que não estavam no enunciado", "Se o enunciado fosse verdadeiro, essa alternativa também tinha que ser"] }
        ]
    },

    {
        id: "deduc2",
        txt: ["Toda filósofa é inteligente.", "Djamila Ribeiro é uma filósofa.", "Logo?"],
        options: [
            { opt: "deduc2_opt0", txt: "Djamila Ribeiro é inteligente", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas tinham palavras que não estavam no enunciado", "Se o enunciado fosse verdadeiro, essa alternativa também tinha que ser"] },
            { opt: "deduc2_opt1", txt: "Djamila Ribeiro é uma jornalista", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] },
            { opt: "deduc2_opt2", txt: "Toda filósofa não é uma jornalista", justifs: ["Era a única alternativa que fazia sentido", "As outras alternativas não faziam sentido", "Eu chutei"] }
        ]
    },
]

export {inductionsQuestionsArray, deductionQuestionsArray};