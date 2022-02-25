const questions = {

    firstSetofQuestions: [
        {
            id: "silog0",
            txt: [
                "A seguir estão alguns arguementos que você deve ter visto antes. Selecione a análise em silogismo mais adequada.",
                "Toda lei de segregação degrada a personalidade hummana",
                "Toda lei que degrada a personalidade humana é injusta",
                "Logo, toda lei de segregação é injusta."
            ],
            options: [
                { opt: "silog0_opt0", txt: "L's são D. Todas as D's são I. Logo, L's são I.", justifs: [] },
                { opt: "silog0_opt1", txt: "Todas L's são D. Todas as D's são I. Logo, todas L's são I.", justifs: [] },
                { opt: "silog0_opt2", txt: "Algumas L's são D. Todas as D's são I. Logo, algumas L's são I.", justifs: [] }
            ],
        },

        {
            id: "silog1",
            txt: [
                "Todo termo de gênero neutro pode ser naturalmente aplicado a mulheres individuais",
                "O termo 'homem' não pode ser aplicado naturalmente a uma mulher individual",
                "Logo, o termo 'homem' não é um termo de gênero neutro"
            ],
            options: [
                { opt: "silog1_opt0", txt: "Todo T é A. h não é A. Logo, h não é A.", justifs: [] },
                { opt: "silog1_opt1", txt: "Algum T é A. h é A. Logo, h é T.", justifs: [] },
                { opt: "silog1_opt2", txt: "Todo T é A. h não é A. Logo, h não é T.", justifs: [] }
            ]
        },

        {
            id: "silog2",
            txt: [
                "Todo comunista favorece os pobres",
                "Todo antirracista favorece os pobres",
                "Logo, todo antirracista é comunista"
            ],
            options: [
                { opt: "silog2_opt0", txt: "Todo C é F. Todo A não é F. Logo, algum A não é F.", justifs: [] },
                { opt: "silog2_opt1", txt: "Todo C é F. Todo A é F. Logo, todo A é C.", justifs: [] },
                { opt: "silog2_opt2", txt: "Todo C é F. Todo A é F. Logo, todo C é A.", justifs: [] }
            ]
        }
    ],

    firstSetCorrectAnswers: {
        silog0: "Todas L's são D. Todas as D's são I. Logo, todas L's são I.", 
        silog1: "Todo T é A. h não é A. Logo, h não é T.", 
        silog2: "Todo C é F. Todo A é F. Logo, todo A é C."
    },

    secondSetofQuestions: [
        {
            id: "deduc0",
            txt: ["Selecione a (única) conclusão possível a partir dessas premissas:", "Nenhum sentimento que diminui quando compreendemos sua origem é racional.", 
                    "Todo sentimento racista culturalmente ensinado diminui quando compreendemos sua origem.", "Logo?"],
            options: [
                { opt: "deduc0_opt0", txt: "Algum sentimento racista culturalmente ensinado não é racional", justifs: [] },
                { opt: "deduc0_opt1", txt: "Nenhum sentimento racista culturalmente ensinado é racional", justifs: [] },
                { opt: "deduc0_opt2", txt: "Algum sentimento que diminui quando compreendemos sua origem é racional", justifs: [] }
            ]
        },

        {
            id: "deduc1",
            txt: ["Todo ato humano é determinado (ou seja, é causado por eventos além do nosso controle).", "Nenhum ato determinado é livre.", "Logo?"],
            options: [
                { opt: "deduc1_opt0", txt: "Nenhum ato humano é livre", justifs: [] },
                { opt: "deduc1_opt1", txt: "Todo ato determinado é humano", justifs: [] },
                { opt: "deduc1_opt2", txt: "Algum ato humano é livre", justifs: [] }
            ]
        },

        {
            id: "deduc2",
            txt: ["Algum programa de cotas raciais é uma tentativa de fazer reparos a injustiças cometidas no passado a determinado grupo.", 
                    "Nenhuma tentativa de fazer reparos a injustiças cometidas no passsado a determinado grupo discrimina simplesmente devido à raça.", "Logo?"],
            options: [
                { opt: "deduc2_opt0", txt: "Nenhuma tentativa de fazer reparos a injustiças cometidas no passsado a determinado grupo discrimina é um programa de cotas raciais", justifs: [] },
                { opt: "deduc2_opt1", txt: "Nenhum programa de cotas raciais discrimina simplesmente devido à raça", justifs: [] },
                { opt: "deduc2_opt2", txt: "Algum programa de cotas raciais não discrimina simplesmente devido à raça", justifs: [] }
            ]
        },
    ], 

    secondSetCorrectAnswers: {
        deduc0: "Nenhum sentimento racista culturalmente ensinado é racional",
        deduc1: "Nenhum ato humano é livre", 
        deduc2: "Algum programa de cotas raciais não discrimina simplesmente devido à raças", 
    }
}

export default questions;