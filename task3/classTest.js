console.log('Test class test');
const newTask = new Task('New tsk', 'description for new task', 'lola', 'To Do', 'High', false);
console.log(newTask);
console.log(Task.validate(newTask));
const noValidTask = new Task('New tsk', '', 'lola', 'To Do', 'High', false);
console.log(noValidTask);
console.log(Task.validate(noValidTask));

console.log('--------------');
console.log('Comment class test');
const newComment = new Comment('new comment');
console.log(newComment);
console.log(Comment.validate(newComment));
newComment.author = 'Nick';
console.log(newComment);
console.log(Comment.validate(newComment));
const noValidComment = new Comment('');
console.log(noValidComment);
console.log(Comment.validate(noValidComment));

console.log('--------------');
console.log('TaskCollection class test');
const tasks = [
  {
    id: '1',
    name: 'Создать логотип приложения',
    description: 'Формат изображения – svg, размеры - 100х100px',
    createdAt: new Date('2023-03-09T11:20:00'),
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: [],
  },
  {
    id: '2',
    name: 'Переименовать константу DELAY_TIME ',
    description:
      'Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME',
    createdAt: new Date('2023-03-09T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '912',
        text: 'Будет сделано!',
        createdAt: new Date('2023-03-09T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
];
const newTasksCollection = new TaskCollection(tasks);
console.log(newTasksCollection);
console.log('add user');
newTasksCollection.user = 'Lika';
console.log(newTasksCollection);
console.log('user Lika add new task');
newTasksCollection.add('add new task', 'description add new task', 'Lika', 'To Do', 'High', false);
console.log(newTasksCollection);
console.log('user Lika add new task for Masha');
newTasksCollection.add('add new task', 'description add new task', 'Masha', 'To Do', 'High', false);
console.log(newTasksCollection);
const tasksForAddAll = [
  {
    id: '3',
    name: 'Создать прототип главной страницы',
    description: 'Прототип для декстопа и мобильных устройств',
    createdAt: new Date('2023-03-05T23:00:00'),
    assignee: 'Lika',
    status: 'To Do',
    priority: 'High',
    isPrivate: true,
    comments: [],
  },
  {
    id: '4',
    name: 'Создать дизайн главной страницы',
    description: '',
    createdAt: new Date('2023-03-03T10:10:00'),
    assignee: 'Алекс',
    status: 'In progress',
    priority: 'Low',
    isPrivate: false,
    comments: [],
  },
  {
    id: '20',
    name: 'Создать прототип личного кабинета',
    description: 'Прототип для декстопа и мобильных устройств',
    createdAt: new Date('2023-03-06T23:00:00'),
    assignee: 'Алекс',
    status: 'lala',
    priority: 'High',
    isPrivate: true,
    comments: [],
  },
  {
    id: '5',
    name: 'Создать дизайн личного кабинета',
    description: 'Оформить в той же стилистике, что и главную страницу',
    createdAt: new Date('2023-03-07T23:00:00'),
    assignee: 'Алекс',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '1com',
        text: 'Цветовая палитра пастельная',
        createdAt: new Date('2023-03-09T23:00:05'),
        author: 'Алекс',
      },
      {
        id: '2com',
        text: 'Цветовая палитра изменена',
        createdAt: new Date('2023-03-12T23:00:05'),
        author: 'Алекс',
      },
    ],
  },
];
console.log('addAll');
const noCorrectTask = newTasksCollection.addAll(tasksForAddAll);
console.log('noCorrectTask');
console.log(noCorrectTask);

console.log('active task');
console.log(newTasksCollection);
console.log('get task');
console.log(newTasksCollection.get('1'));
console.log('delete task user Lika task Иванов Иван');
console.log(newTasksCollection.remove('2'));
newTasksCollection.user = 'Иванов Иван';
console.log('delete task user Иванов Иван task Иванов Иван');
console.log(newTasksCollection.remove('2'));
newTasksCollection.user = 'Lika';
console.log('add Comment');
newTasksCollection.addComment('1', 'new comment for task');
console.log(newTasksCollection.get('1'));

console.log('edit task user Lika task Иванов Иван');
newTasksCollection.edit('1', 'edit task');
console.log(newTasksCollection.get('1'));
newTasksCollection.user = 'Иванов Иван';
console.log('edit task user Иванов Иван task Иванов Иван');
newTasksCollection.edit('1', 'edit task');
console.log(newTasksCollection.get('1'));

console.log('get page');
const getPage = newTasksCollection.getPage(0, 2);
console.log(getPage);
const getPageFilter = newTasksCollection.getPage(0, 2, { assignee: 'li' });
console.log(getPageFilter);
console.log('clear');
newTasksCollection.clear();
console.log(newTasksCollection);
