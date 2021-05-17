const initialData = {
    tasks: {
      'a-1': { id: 'a-1', content: 'Elisabete de Boêmia é uma filósofa.' },
      'a-2': { id: 'a-2', content: 'Logo, Elisabete de Boêmia escreve bem.'},
      'a-3': { id: 'a-3', content: 'Toda filósofa escreve bem.'},
    
      'b-1': { id: 'b-1', content: 'Logo, memes sobre youtubers estão no Facebook' },
      'b-2': { id: 'b-2', content: 'Se um meme é engraçado, então ele está no Facebook.' },
      'b-3': { id: 'b-3', content: 'Todos os memes sobre youtubers são engraçados.' },
    },

    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['a-1', 'a-2', 'a-3'],
        correctAnswers: ['a-3', 'a-1', 'a-2'], 
        correct: undefined
      },

      'column-2': {
          id: 'column-2', 
          title: "Test", 
          taskIds: ['b-1', 'b-2', 'b-3'],
          correctAnswers: ['b-3', 'b-2', 'b-1'],
          correct: undefined
      }
    },

    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;