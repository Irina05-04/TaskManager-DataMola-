// user test
tasksModule.changeUser('Alex');
console.log(tasksModule.user);
tasksModule.changeUser('Nick');
console.log(tasksModule.user);
console.log('------------------------');

// getTasks
console.log('getTasks(0,10)');
console.log(tasksModule.getTasks(0, 10));
console.log('getTasks(5,10)');
console.log(tasksModule.getTasks(5, 10));
console.log('getTasks(5,10,{assignee: "ал"})');
console.log(tasksModule.getTasks(5, 10, { assignee: 'ал' }));
console.log('getTasks(5,10,{dateFrom: Date.now()})');
console.log(tasksModule.getTasks(5,10,{dateFrom: Date.now()}));
console.log('getTasks(0,10,{dateTo: Date.now()})');
console.log(tasksModule.getTasks(0,10,{dateTo: Date.now()}));
console.log('getTasks(0,10,{status: "To Do"})');
console.log(tasksModule.getTasks(0,10,{status: 'To Do'}));
console.log('getTasks(0,10,{status: "To Do", priority: "High"})');
console.log(tasksModule.getTasks(0,10,{status: 'To Do', priority: 'High'}));
console.log('getTasks(0,10,{priority: "Low"})');
console.log(tasksModule.getTasks(0,10,{priority: 'Low'}));
console.log('tasksModule.getTasks(0,10,{isPrivate: true})');
console.log(tasksModule.getTasks(0,10,{isPrivate: true}));
console.log('------------------------');

//getTask
console.log('getTask(5)');
console.log(tasksModule.getTask('5'));

//validateTask
console.log('validateTask');
const validTask = {
    id: "1",
    name: "Создать логотип приложения",
    description: "Формат изображения – svg, размеры - 100х100px",
    createdAt: new Date("2023-03-09T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [],
  };
console.log('validTask');
console.log(tasksModule.validateTask(validTask));
const noValidTask = {
    id: "1",
    name: "Создать логотип приложения",
    description: "Формат изображения – svg, размеры - 100х100px",
    createdAt: new Date("2023-03-09T23:00:00"),
    assignee: "Иванов Иван",
    status: "Lama",
    priority: "High",
    isPrivate: false,
    comments: [],
  };
console.log('novalidTask');
console.log(tasksModule.validateTask(noValidTask));
console.log('------------------------');

//addTask
console.log('addTask');
console.log(tasksModule.addTask('новая задача', 'новая тестовая задача',tasksModule.user, 'To Do', 'High', false));
console.log(tasksModule.getTasks(0,21));
console.log('------------------------');

//editTask
console.log('editTask');
console.log(tasksModule.editTask('20', 'Очень интересная задача'));
console.log(tasksModule.getTask('20'));
tasksModule.changeUser('Алекс');
console.log(tasksModule.editTask('20', 'Очень интересная задача'));
console.log(tasksModule.getTask('20'));
console.log('------------------------');

//removeTask
console.log('removeTask');
console.log(tasksModule.removeTask('12'));
console.log(tasksModule.getTasks(0,20));
console.log('------------------------');

//addComment
console.log('addComment');
console.log(tasksModule.addComment('20', 'новый комментарий'));
console.log(tasksModule.getTask('20'));
