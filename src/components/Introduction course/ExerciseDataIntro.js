const initialData = {
    tasks: {
      'a-1': { id: 'a-1', content: 'Elisabete de Boêmia é uma filósofa.' },
      'a-2': { id: 'a-2', content: 'Logo, Elisabete de Boêmia escreve bem.'},
      'a-3': { id: 'a-3', content: 'Toda filósofa escreve bem.'},
    
      'b-1': { id: 'b-1', content: 'Logo, memes sobre youtubers estão no Facebook' },
      'b-2': { id: 'b-2', content: 'Se um meme é engraçado, então ele está no Facebook.' },
      'b-3': { id: 'b-3', content: 'Todos os memes sobre youtubers são engraçados.' },

      'c-1': { id: 'c-1', content: 'A minha família por parte de pai me adicionou no grupo deles.'},
      'c-2': { id: 'c-2', content: 'Muitos grupos de família no WhatsApp mandam mensagens de bom dia.'},
      'c-3': { id: 'c-3', content: 'Se eu ficar no grupo, vou receber mensagens de bom dia.'},

      'd-1': { id: 'd-1', content: 'Assim, tomar vacinas é eficaz.'},
      'd-2': { id: 'd-2', content: 'Existem muitos estudos científicos sobre a eficácia de vacinas.'},
      'd-3': { id: 'd-3', content: 'Estudos científicos tendem a ser bem desenvolvidos e confiáveis.'},
    },

    columns: {
      'column-1': {
        id: 'column-1',
        taskIds: ['a-1', 'a-2', 'a-3'],
        correctAnswers: ['a-3', 'a-1', 'a-2'], 
        correct: undefined, 
        argumentType: "deduc"
      },

      'column-2': {
          id: 'column-2', 
          taskIds: ['b-1', 'b-2', 'b-3'],
          correctAnswers: ['b-3', 'b-2', 'b-1'],
          correct: undefined,
          argumentType: "deduc"
      },

      'column-3': {
        id: 'column-3', 
        taskIds: ['c-1', 'c-2', 'c-3'],
        correctAnswers: ['c-2', 'c-1', 'c-3'],
        correct: undefined,
        argumentType: "induc"
      }, 

      'column-4': {
        id: 'column-4', 
        taskIds: ['d-1', 'd-2', 'd-3'],
        correctAnswers: ['d-2', 'd-3', 'd-1'],
        correct: undefined,
        argumentType: "induc"
      }

    },

    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-4', 'column-3', 'column-2'],
  };
  
  export default initialData;