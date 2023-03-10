let tasks = [
    {
      id: "1",
      name: "Создать логотип приложения",
      description: "Формат изображения – svg, размеры - 100х100px",
      createdAt: new Date("2023-03-09T23:00:00"),
      assignee: "Иванов Иван",
      status: "To Do",
      priority: "High",
      isPrivate: false,
      comments: [],
    },
    {
      id: "2",
      name: "Переименовать константу DELAY_TIME ",
      description:
        "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
      createdAt: new Date("2023-03-09T23:00:00"),
      assignee: "Иванов Иван",
      status: "To Do",
      priority: "Medium",
      isPrivate: false,
      comments: [
        {
          id: "912",
          text: "Будет сделано!",
          createdAt: new Date("2023-03-09T23:00:05"),
          author: "Иванов Иван",
        },
      ],
    },
    {
      id: "3",
      name: "Создать прототип главной страницы",
      description: "Прототип для декстопа и мобильных устройств",
      createdAt: new Date("2023-03-05T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "High",
      isPrivate: true,
      comments: [],
    },
    {
      id: "4",
      name: "Создать дизайн главной страницы",
      description: "Выбрать цветовое решение",
      createdAt: new Date("2023-03-03T23:00:00"),
      assignee: "Алекс",
      status: "In progress",
      priority: "Low",
      isPrivate: false,
      comments: [],
    },
    {
      id: "20",
      name: "Создать прототип личного кабинета",
      description: "Прототип для декстопа и мобильных устройств",
      createdAt: new Date("2023-03-06T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "High",
      isPrivate: true,
      comments: [],
    },
    {
      id: "5",
      name: "Создать дизайн личного кабинета",
      description: "Оформить в той же стилистике, что и главную страницу",
      createdAt: new Date("2023-03-07T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "Medium",
      isPrivate: true,
      comments: [
        {
          id: "1com",
          text: "Цветовая палитра пастельная",
          createdAt: new Date("2023-03-09T23:00:05"),
          author: "Алекс",
        },
        {
          id: "2com",
          text: "Цветовая палитра изменена",
          createdAt: new Date("2023-03-12T23:00:05"),
          author: "Алекс",
        },
      ],
    },
    {
      id: "6",
      name: "Создать прототип страницы о нас",
      description: "Прототип для декстопа и мобильных устройств",
      createdAt: new Date("2023-03-08T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "High",
      isPrivate: true,
      comments: [],
    },
    {
      id: "7",
      name: "Создать дизайн страницы о нас",
      description:
        "Дизайн в соответсвии с выбранной цветовой палитрой и стилистикой",
      createdAt: new Date("2023-03-09T23:00:00"),
      assignee: "Алекс",
      status: "In progress",
      priority: "Low",
      isPrivate: true,
      comments: [],
    },
    {
      id: "8",
      name: "Утвердить разработанный дизайн",
      description: "Презентовать дизайн заказчику, пометить замечания",
      createdAt: new Date("2023-03-10T23:00:00"),
      assignee: "Алекс",
      status: "To Do",
      priority: "High",
      isPrivate: true,
      comments: [],
    },
    {
      id: "9",
      name: "Внести правки в разработанный дизайн",
      description: "Учесть замечания заказчика по дизайну",
      createdAt: new Date("2023-03-11T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "Low",
      isPrivate: true,
      comments: [],
    },
    {
      id: "10",
      name: "Создать прототип страницы офрмления заказа",
      description: "Прототип для декстопа и мобильных устройств",
      createdAt: new Date("2023-03-12T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "High",
      isPrivate: true,
      comments: [],
    },
    {
      id: "11",
      name: "Создать дизайн страницы оформления заказа",
      description:
        "Дизайн в соответсвии с выбранной цветовой палитрой и стилистикой",
      createdAt: new Date("2023-03-13T23:00:00"),
      assignee: "Алекс",
      status: "In progress",
      priority: "Medium",
      isPrivate: false,
      comments: [],
    },
    {
      id: "12",
      name: "Передать дизайн программисту",
      description: "Структурировать макет и передать программисту",
      createdAt: new Date("2023-03-14T23:00:00"),
      assignee: "Алекс",
      status: "Complete",
      priority: "Low",
      isPrivate: true,
      comments: [],
    },
    {
      id: "13",
      name: "Создать базовую структуру приложения",
      description:
        "оздать базовую структуру приложения в соответсвии с макетом дизайнера",
      createdAt: new Date("2023-03-15T23:00:00"),
      assignee: "Николай",
      status: "Complete",
      priority: "High",
      isPrivate: false,
      comments: [
        {
          id: "13com",
          text: "Создана базовая структура главной страницы",
          createdAt: new Date("2023-03-17T23:00:05"),
          author: "Николай",
        },
        {
          id: "131com",
          text: "Создана базовая структура страницы о нас",
          createdAt: new Date("2023-03-18T23:00:05"),
          author: "Николай",
        },
      ],
    },
    {
      id: "14",
      name: "Верста базовых компонетов",
      description: "Верста базовых компонетов для возможности переиспользования",
      createdAt: new Date("2023-03-16T23:00:00"),
      assignee: "Николай",
      status: "Complete",
      priority: "High",
      isPrivate: false,
      comments: [],
    },
    {
      id: "15",
      name: "Обсудить бюджет проекта",
      description:
        "Составить с заказчиком бриф, указать стоимость, выставить сроки",
      createdAt: new Date("2023-03-05T23:00:00"),
      assignee: "Алина",
      status: "Complete",
      priority: "High",
      isPrivate: true,
      comments: [
        {
          id: "151com",
          text: "Бриф составлен",
          createdAt: new Date("2023-03-06T23:00:05"),
          author: "Алина",
        },
      ],
    },
    {
      id: "16",
      name: "Распределить задачи между сотрудниками",
      description:
        "Распределить задачи между сотрудниками, назначить ответственных",
      createdAt: new Date("2023-03-06T23:00:00"),
      assignee: "Алина",
      status: "In progress",
      priority: "Medium",
      isPrivate: false,
      comments: [],
    },
    {
      id: "17",
      name: "Поставить сроки выполнения",
      description: "Ограничить сроки выполнения для каждого этапа",
      createdAt: new Date("2023-03-05T23:00:00"),
      assignee: "Алина",
      status: "Complete",
      priority: "High",
      isPrivate: false,
      comments: [
        {
          id: "171com",
          text: "Сроки для разработки дизайна выставлены",
          createdAt: new Date("2023-03-06T23:00:05"),
          author: "Алина",
        },
      ],
    },
    {
      id: "18",
      name: "Взять предоплату",
      description: "Взять предоплату за проект в размере 50%",
      createdAt: new Date("2023-03-07T23:00:00"),
      assignee: "Кира",
      status: "Complete",
      priority: "High",
      isPrivate: false,
      comments: [
        {
          id: "181com",
          text: "Заполнен договор на взятие предоплаты",
          createdAt: new Date("2023-03-08T23:00:05"),
          author: "Кира",
        },
      ],
    },
    {
      id: "19",
      name: "Предоставить проект заказчику",
      description: "Предоставить выполненную работу заказчику",
      createdAt: new Date("2023-03-05T23:00:00"),
      assignee: "Алекс",
      status: "To Do",
      priority: "Medium",
      isPrivate: false,
      comments: [],
    },
  ];
  ;
let tasksModul = (function(tasks) {
    var user = '';
    function getTasks(skip, top, filterConfig){
        let array = tasks.slice();
        array.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
        if(filterConfig){
            if(filterConfig.assignee){
                array = array.filter(el => el.assignee.toLowerCase().includes(filterConfig.assignee.toLowerCase()));
            }
            if(filterConfig.dateFrom){
                array = array.filter(el => el.createdAt > filterConfig.dateFrom);
            }
            if(filterConfig.dateTo){
                array = array.filter(el => el.createdAt < filterConfig.dateTo);
            }
            if(filterConfig.status){
                array = array.filter(el => el.status === filterConfig.status);
            }
            if(filterConfig.priority){
                array = array.filter(el => el.priority === filterConfig.priority);
            }
            if(filterConfig.isPrivate){
                array = array.filter(el => el.isPrivate === filterConfig.isPrivate);
            }
            if(filterConfig.description){
                array = array.filter(el => el.description.includes(filterConfig.description));
            }
        }
        return array.slice(skip, top);
    }
    function getTask(id){
        return tasks.find(el => el.id === id);
    }
    function validateTask(task){
        if(!task.id || typeof task.id !== 'string') return false;
        if(!task.name || typeof task.name !=='string' || task.name.length > 100) return false;
        if(!task.description || typeof task.description !== 'string' || task.description > 280) return false;
        if(!task.createdAt || !Date.parse(task.createdAt)) return false;
        if(!task.assignee) return false;
        if(!task.status || typeof task.status !== 'string' || task.status.search(/\b(To Do|In progress|Complete)\b/) === -1) return false
        if(!task.priority || typeof task.priority !== 'string' || task.priority.search(/\b(High|Medium|Low)\b/) === -1) return false;
        if(task.isPrivate === null || typeof task.isPrivate !== 'boolean') return false;       
        if(!Array.isArray(task.comments)) return false;
        return true;
    }
    function addTask(name,description, assignee, status,priority,isPrivate){
        //const id = (new Date()).toString();
        const id = (tasks.length + 1).toString();
        const createdAt = new Date();
        const comments = [];
        const newTask = {
            id,
            name,
            description,
            createdAt,
            assignee,
            status,
            priority,
            isPrivate,
            comments
        }
        console.log(newTask);
        if(validateTask(newTask)){
            tasks = [...tasks, newTask];
            return true;
        } else return false;
    }
    function editTask(id, name, description, assignee, status, priority, isPrivate){
        let currentTask = getTask(id)
        if(currentTask.assignee !== this.user) return false;
        currentTask = {
            ...currentTask,
            name: name ? name : currentTask.name,
            description: description ? description : currentTask.description,
            assignee: assignee ? assignee : currentTask.assignee,
            status: status ? status : currentTask.status,
            priority: priority ? priority : currentTask.priority,
            isPrivate: isPrivate !== undefined ? isPrivate : currentTask.isPrivate,
        }
        if(validateTask(currentTask)){
            tasks =  tasks.map(n => n.id === currentTask.id ? currentTask : n);
            return true;
        } else return false;
    }
    function removeTask(id){
        let currentTask = getTask(id);
        if(currentTask.assignee !== this.user) return false;
        tasks = tasks.filter(el => el.id !== id);
        return true;
    }
    function validComment(com){
        if(!com.id || typeof com.id !== string) return false;
        if(!com.text || typeof com.text !== string || com.text.length > 280) return false;
        if(!com.createdAt || typeof com.createdAt !== Date) return false;
        if(!com.author || typeof com.author !== string) return false;
        return true;
    }
    function createComment(text){
        const id = `${new Date().toString()}com`;
        const createdAt = new Date();
        return newComment = {
            id,
            createdAt,
            author: this.user,
            text
        }
    }
    function addComment(id, text){
        let currentTask = getTask(id);
        if(!text) return false;
        const newComment = createComment(text);
        currentTask.comments = [...currentTask.comments, newComment];
        return true;
    }
    function changeUser(usr){
        if(usr !== '') this.user = usr;
    }
    return {
        user,
        validateTask,
        getTasks,
        getTask,
        addTask,
        editTask,
        removeTask,
        validComment,
        createComment,
        addComment,
        changeUser
      }
}(tasks));

//user test
tasksModul.changeUser('Alex');
console.log(tasksModul.user);
tasksModul.changeUser('Nick');
console.log(tasksModul.user);
console.log('------------------------');

//getTasks
console.log('getTasks(0,10)');
console.log(tasksModul.getTasks(0,10));
console.log('getTasks(5,10)');
console.log(tasksModul.getTasks(5,10));
console.log('getTasks(5,10,{assignee: "ал"})');
console.log(tasksModul.getTasks(5,10,{assignee: 'ал'}));
console.log('getTasks(5,10,{dateFrom: Date.now()})');
console.log(tasksModul.getTasks(5,10,{dateFrom: Date.now()}));
console.log('getTasks(0,10,{dateTo: Date.now()})');
console.log(tasksModul.getTasks(0,10,{dateTo: Date.now()}));
console.log('getTasks(0,10,{status: "To Do"})');
console.log(tasksModul.getTasks(0,10,{status: 'To Do'}));
console.log('getTasks(0,10,{status: "To Do", priority: "High"})');
console.log(tasksModul.getTasks(0,10,{status: 'To Do', priority: 'High'}));
console.log('getTasks(0,10,{priority: "Low"})');
console.log(tasksModul.getTasks(0,10,{priority: 'Low'}));
console.log('tasksModul.getTasks(0,10,{isPrivate: true})');
console.log(tasksModul.getTasks(0,10,{isPrivate: true}));
console.log('------------------------');

//getTask
console.log('getTask(5)');
console.log(tasksModul.getTask('5'));

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
console.log(tasksModul.validateTask(validTask));
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
console.log(tasksModul.validateTask(noValidTask));
console.log('------------------------');

//addTask
console.log('addTask');
console.log(tasksModul.addTask('новая задача', 'новая тестовая задача',tasksModul.user, 'To Do', 'High', false));
console.log(tasksModul.getTasks(0,21));
console.log('------------------------');

//editTask
console.log('editTask');
console.log(tasksModul.editTask('20', 'Нина'));
console.log(tasksModul.getTask('20'));
tasksModul.changeUser('Алекс');
console.log(tasksModul.editTask('20', 'Нина'));
console.log(tasksModul.getTask('20'));

//removeTask
console.log('removeTask');
console.log(tasksModul.removeTask('12'));
console.log(tasksModul.getTasks(0,20));

//addComment
console.log('addComment');
console.log(tasksModul.addComment('20', 'новый комментарий'));
console.log(tasksModul.getTask('20'));



