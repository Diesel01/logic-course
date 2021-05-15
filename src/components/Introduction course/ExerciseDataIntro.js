const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Take out the garbage' },
      'task-2': { id: 'task-2', content: 'Watch my favorite show' },
      'task-3': { id: 'task-3', content: 'Charge my phone' },
      'task-4': { id: 'task-4', content: 'Cook dinner' },
    
      'alt-1': { id: 'alt-1', content: 'Take out the garbage' },
      'alt-2': { id: 'alt-2', content: 'Watch my favorite show' },
      'alt-3': { id: 'alt-3', content: 'Charge my phone' },
      'alt-4': { id: 'alt-4', content: 'Cook dinner' },
    },

    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        correctAnswers: ['task-4', 'task-3', 'task-2', 'task-1'], 
        correct: undefined
      },

      'column-2': {
          id: 'column-2', 
          title: "Test", 
          taskIds: ['alt-1', 'alt-2', 'alt-3', 'alt-4'],
          correctAnswers: ['alt-3', 'alt-2', 'alt-4', 'alt-1'],
          correct: undefined
      }
    },

    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;