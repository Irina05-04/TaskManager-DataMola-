export const tasks = [
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
    isPrivate: true,
    comments: [],
  },
  {
    id: "12",
    name: "Передать дизайн программисту",
    description: "Структурировать макет и программисту",
    createdAt: new Date("2023-03-145T23:00:00"),
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
    isPrivate: true,
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
    isPrivate: true,
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
    isPrivate: true,
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
    isPrivate: true,
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
    isPrivate: true,
    comments: [],
  },
];
