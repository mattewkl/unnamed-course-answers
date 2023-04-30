// ПР6

// Объекты
// y1.1 
const building = {
  type: 'панельный',
  floors: 5,
  hasElevator: false,
  architect: {
    name: "Виталий Павлович Лагутенко",
    homeTown: "Могилёв",
    yearOfBirth: 1904
  }
};

// y2.1

const welcomeMessages = {
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎'
};
welcomeMessages.finnish = 'Tervetuloa'
// y2.2

const russian = 'Добро пожаловать';
const english = 'Welcome';
const french = 'Bienvenue';
const italian = 'Benvenuto';
const spanish = 'bienvenido';
const chinese = '歡迎';

const welcomeMessages = {
  russian, english, french, italian, spanish, chinese
};


//y3.1 

const welcomeMessages = {
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎',
  finnish: 'Tervetuloa'
};

function addWelcomeMessage(language, message) {
  welcomeMessages[language] = message
}

addWelcomeMessage('danish', 'Velkommen');
addWelcomeMessage('zulu', 'Ukwamukela');

console.log(welcomeMessages.danish); // "Velkommen"
console.log(welcomeMessages.zulu); // "Ukwamukela"

//y3.2

const phonebook = {
  'Тёма': {
    mobile: '+79995164420',
    work: '+79569172374',
    home: '+78123552223'
  },
  'Вася брат Андрея': {
    mobile: '+79045174415'
  }
};


function addPhoneNumber(name, numberType, number) {
  if (phonebook[name] === undefined) {phonebook[name] = {}}
  phonebook[name][numberType] = number;
}

// когда функция будет готова, добавьте мобильный Анастасии Павловны
addPhoneNumber('Анастасия Павловна', 'mobile', '+79111545616');

console.log(phonebook['Анастасия Павловна'].mobile); // "+79111545616"

//y3.3

const yourNumber = 'Л055';
let windowNumber;

const windows = {
  'Л054':1,
  'Л055':2,
  'Л056':3,
  'Л057':4,
  'Л058':5,
};

windowNumber = windows[yourNumber];

console.log(windowNumber); // 2

//y3.4 

const yourNumber = 'Л059';
let windowNumber;

const windows = {
  'Л054': 1,
  'Л055': 2,
  'Л056': 3,
  'Л057': 4,
  'Л058': 5
};

windowNumber = windows[yourNumber] || 0;

console.log(windowNumber); // 0


//y4.1

const right = {
  right1: '⇸',
  right2: '→',
  notLeft: '⇍',
  right3: '⇛',
  right4: '⇉',
  left: '⇐'
};

delete right.left
console.log(right);


//y4.2 

const welcomeMessages = {
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎',
  finnish: 'Tervetuloa'
};

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach(element => delete welcomeMessages[element])
}

deleteWelcomeMessages(['italian', 'french']);

console.log(welcomeMessages);

/* Теперь итальянский и французский переводы удалены:

  {
    russian: "Добро пожаловать",
    english: "Welcome",
    spanish: "bienvenido",
    chinese: "歡迎",
    finnish: "Tervetulo"'
  }

*/

//y4.3

const welcomeMessages = { 
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎',
  finnish: 'Tervetuloa'
};

function countLanguages(obj, propsArr) {
	return propsArr.reduce(function (res, current) {
                           if (current in obj) {
                             res += 1
                           }
                           return res
                           }, 0)
}

console.log(countLanguages(welcomeMessages, ['english', 'french', 'mandarin'])); // 2
console.log(countLanguages(welcomeMessages, ['russian', 'czech'])); // 1

//y5.1 

const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540
};



const stratoHeight = 11000;

let tempHeights = 0;
Object.values(heights).forEach(element => tempHeights += element)

const sumHeights = tempHeights

console.log(sumHeights >= stratoHeight);


//y5. 2

const mya = {
  'бремя': 'burden',
  'время': 'time',
  'вымя': 'udder',
  'мяч': 'ball',
  'знамя': 'banner',
  'имя': 'name',
  'мясо': 'meat',
};

Object.keys(mya).forEach(function (key) {
  if (!key.endsWith('мя')) {delete mya[key]}
});

console.log(mya);

/*

  {
    бремя: "burden",
    время: "time",
    вымя: "udder",
    знамя: "banner",
    имя: "name"
  }

*/

//y5. 3

function swap(obj) {
  const res = {};
  Object.entries(obj).forEach(element => res[element[1]] = element[0])
  
  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }

//y6.1 

function copy(obj) {
  const newObj = {}
  Object.keys(obj).forEach(function (key) {newObj[key] = obj[key]})
  
  return newObj
}

const firstObj = {
	one: 1,
	two: 2,
	three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj не изменился
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

//y7.1 

function compare(firstObj, secondObj) {
	if (firstObj === secondObj)
        {return true}
    else
        {return false}
}

const first = {
  property: 'value'
};

const second = {
  property: 'value'
};

const third = second;

console.log(compare(first, second)); // false
console.log(compare(second, third)); // true

//y7.2

function isEqual(firstObj, secondObj) {
  const firstKeys = Object.keys(firstObj);
  const secondKeys = Object.keys(secondObj);

  // проверим, одинаковое ли количество ключей в объектах
  if (firstKeys.length !== secondKeys.length) {
    // если нет, то всё: объекты точно не равны
    return false;
  }

  /* проверим, что для каждого ключа первого объекта
  значения в первом и втором объекте равны */
  return firstKeys.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
}

const first = {
  property: 'value',
  anotherProperty: 'another value'
};

const second = {
  property: 'value',
  anotherProperty: 'another value'
};

const third = {
  property: 'value',
  anotherProperty: 'one more value'
};

isEqual(first, second); // true
isEqual(second, third); // false


//y8.1

function shallowCopy(obj) {
  return Object.assign({}, obj)
}

const myObj = {
  one: 1,
  two: 2,
  three: 3
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy === myObj); // false

// y8.2

function evolution(obj, key, value) {
  obj[key] = value;
  return obj;
}

const fish = {
  eggs: 'икра',
  eyes: 2,
  home: 'вода'
};

const newObject = Object.assign({}, fish)

const frog = evolution(newObject, 'legs', 4);

console.log('лягушка: ', frog);

// лягушка: { eggs: "икра", eyes: 2, home: "вода" }

console.log('рыба: ', fish);

// рыба: { eggs: "икра", eyes: 2, home: "вода" }
// рыбы тоже изменились!

//y9.1 

const aladdinSane = {
  artist: 'David Bowie',
  album: 'Aladdin Sane',
  year: 1973,
  tracks: {
    'Watch That Man': '4:30',
    'Aladdin Sane': '5:06',
    'Drive-In Saturday': '4:33',
    'Panic in Detroit': '4:25',
    'Cracked Actor': '3:01',
    'Time': '5:15',
    'The Prettiest Star': '3:31',
    "Let's Spend the Night Together": '3:10',
    'The Jean Genie': '4:07',
    'Lady Grinning Soul': '3:54'
  }
};

const aladdinSaneCopy = Object.assign({}, aladdinSane)
aladdinSaneCopy.tracks = Object.assign({}, aladdinSane.tracks)

console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false

//y10.1 

function double(value) {
  if (Array.isArray(value)) 
    {return value.map(function (element) {return element *= 2})}
  else
    return value * 2
}

double(2); // 4
double([1, 2, 3]); // [2, 4, 6]

console.log(double([1, 2, 3]))

//y 11.1 
function counter() {
  return counter.counter_num +=1
}
counter.counter_num = 0

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5

// Обработка событий

//y2.1
// сработает один раз, когда нажали клавишу
document.addEventListener('keypress', function() {
  console.log('Нажали клавишу');
});

// будет срабатывать много раз, когда клавиша нажата
document.addEventListener('keydown', function() {
  console.log('Клавиша нажата');
});

// сработает один раз, когда отпустили клавишу
document.addEventListener('keyup', function() {
  console.log('Отпустили клавишу');
});

//y3.1

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown',function(evt) {console.log(evt)})

//y3.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown',function(evt) {
  if (evt.key === 'Enter') {
  console.log(evt)}})

//y3.3

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown',function(evt) {
  if (evt.key === 'Enter') {
  console.log(evt)}})

//y3.4

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown',function(evt) {
  if (evt.key === 'Enter') {
  addSong(artistInput.value, titleInput.value)}})

titleInput.addEventListener('keydown',function(evt) {
  if (evt.key === 'Enter') {
  addSong(artistInput.value, titleInput.value)}})

//y3.5

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

function keyHandler(evt) {
  if (evt.key === 'Enter') {
  addSong(artistInput.value, titleInput.value)}}

artistInput.addEventListener('keydown',keyHandler)

titleInput.addEventListener('keydown',keyHandler)
// y4.1 

const coverHeading = document.querySelector('.cover__heading');
const playListTitles = [
  'Игорь Тальков. Лучшее',
  'Музыка категории Б',
  'Подборка с фестиваля FYRE'
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener('dblclick', function () {coverHeading.textContent = getRandomElement(playListTitles)})

//y5.1

const coverHeading = document.querySelector('.cover__heading');
const playListTitles = [
  'Игорь Тальков. Лучшее',
  'Музыка категории Б',
  'Подборка с фестиваля FYRE'
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

function doubleClickHandler (event) {coverHeading.textContent = getRandomElement(playListTitles)}

coverHeading.addEventListener('dblclick', doubleClickHandler)


//y5.2

const coverHeading = document.querySelector('.cover__heading');
const playListTitles = [
  'Игорь Тальков. Лучшее',
  'Музыка категории Б',
  'Подборка с фестиваля FYRE'
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

function doubleClickHandler (event) {
  coverHeading.textContent = getRandomElement(playListTitles)
  coverHeading.removeEventListener('dblclick', doubleClickHandler)
}

coverHeading.addEventListener('dblclick', doubleClickHandler)


//y6.1 

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  console.log(evt.key)
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);


//y6.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
  if (evt.key.toLowerCase() === "ё") 
    {evt.preventDefault()}
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);


//y7.1

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);
songsContainer.addEventListener('click', function(evt) {console.log(evt)})

//y7.1 

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);
songsContainer.addEventListener('click', function(evt) {console.log(evt)})

//y7.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);
songsContainer.addEventListener('click', function(evt) {evt.target.classList.toggle('song__like_active')})

//y7.3

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);
songsContainer.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('song__like')) {evt.target.classList.toggle('song__like_active')}})


//работа с формами

//y2.1 

// <!DOCTYPE html>

// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="stylesheet" href="style.css">
//   <title>Конструктор плейлистов</title>
// </head>
// <body>
//   <header class="header">
//     <img src="https://code.s3.yandex.net/web-code/dom/logo.svg" alt="" class="header__logo">
//     <p class="header__logo-sub">Конструктор плейлистов</p>
//   </header>
//   <main class="container">
//     <div class="cover">
//       <div class="cover__image"></div>
//       <h1 class="cover__heading">Плейлист</h1>
//     </div>
//     <div class="block">
//       <h3>Добавить песню</h3>
//       <div class="input">
//         <form name='add'>
//           <input type="text"  name="title" placeholder="Название" class="input__text input__text_type_title">
//           <input type="text" name="artist" placeholder="Исполнитель" class="input__text input__text_type_artist">
//           <button class="input__btn input__btn_action_add">
//             Добавить
//           </button>
//         </form>
//       </div>
//     </div>
//     <div class="block">
//       <h3>Добавленные</h3>
//       <div class="songs-container">

//       </div>
//     </div>
//   </main>

//   <template id="song-template">
//     <div class="song">
//       <h4 class="song__artist"></h4>
//       <p class="song__title"></p>
//     </div>
//   </template>

//   <script src="script.js"></script>
// </body>
// </html>


//y2.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});

console.log(document.forms.add)

//y3.1

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');
const form = document.forms.add;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});

//y3.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');
const form = document.forms.add;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault()
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});

//y4.1

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');
const form = document.forms.add;
const artist = form.elements.artist
const title = form.elements.title


function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});

//y5
const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist
const title = form.elements.title


function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

//y6.1

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {console.log(evt)})

//y6.2

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0
})

//y6.3

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function setSubmitButtonState(isFormValid) {
  
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0
})

//y6.4

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function setSubmitButtonState(isFormValid) {
  if (isFormValid)
    {
     addButton.removeAttribute('disabled');
     addButton.classList.remove('input__btn_disabled'); 
    }
  else 
    {
      addButton.setAttribute('disabled', true);
      addButton.classList.add('input__btn_disabled'); 
    }
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
})

//y6.5

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function setSubmitButtonState(isFormValid) {
  if (isFormValid)
    {
     addButton.removeAttribute('disabled');
     addButton.classList.remove('input__btn_disabled'); 
    }
  else 
    {
      addButton.setAttribute('disabled', true);
      addButton.classList.add('input__btn_disabled'); 
    }
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
})

//y6.6

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function setSubmitButtonState(isFormValid) {
  if (isFormValid)
    {
     addButton.removeAttribute('disabled');
     addButton.classList.remove('input__btn_disabled'); 
    }
  else 
    {
      addButton.setAttribute('disabled', true);
      addButton.classList.add('input__btn_disabled'); 
    }
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
})

//y6.7

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function setSubmitButtonState(isFormValid) {
  if (isFormValid)
    {
     addButton.removeAttribute('disabled');
     addButton.classList.remove('input__btn_disabled'); 
    }
  else 
    {
      addButton.setAttribute('disabled', true);
      addButton.classList.add('input__btn_disabled'); 
    }
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = '';
  title.value = '';
  setSubmitButtonState(false);
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
})

//y7.1 
const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute('disabled');
    addButton.classList.remove('input__btn_disabled');
  } else {
    addButton.setAttribute('disabled', true);
    addButton.classList.add('input__btn_disabled');
  }
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  form.reset()
  setSubmitButtonState(false);
});

form.addEventListener('input', function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
});

// Валидация форм 


// <!doctype html>
// <html lang="ru">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport"
//         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Подписка</title>
//   <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/normalize.css">
//   <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/form-validation/lesson-2/index.css">
//   <link rel="stylesheet" href="style.css">
// </head>
// <body class="page">
//   <div class="page__content">
//     <main class="page__section content">
//       <h1 class="content__title">
//         Оформите подписку
//       </h1>
//       <form class="form">
//         <label class="form__field">
//           Введите ваш email:
//           <input class="form__input" type="email" required>
//         </label>
//         <label class="form__field form__field_type_row">
//           <input class="form__checkbox" type="checkbox" required>
//           <span class="form__checkbox-item"></span>
//           <span class="form__text">Согласие на обработку персональных данных</span>
//         </label>
//         <button type="submit" class="button">
//           Подписаться на уведомления
//         </button>
//       </form>
//     </main>
//   </div>
//   <script src="script.js"></script>
// </body>
// </html>

//y2.2 

// .form__input:hover {
//   border-bottom-color: #000;
// }

// .form__input:focus {
//   border-bottom-color: #007DFF;
// }

// .form__input:invalid {
//   border: 1px solid red;
// }

// .form__input:valid {
//   border: 1px solid green;
// }

// .form__checkbox:checked + .form__checkbox-item {
//   background: #007DFF;
// }

// .form__checkbox:checked + .form__checkbox-item::before {
//   background: url(https://code.s3.yandex.net/web-code/checkbox.svg) center no-repeat;
// }

//y2.3

// <!doctype html>
// <html lang="ru">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport"
//         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Подписка</title>
//   <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/normalize.css">
//   <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/form-validation/lesson-2/index.css">
//   <link rel="stylesheet" href="style.css">
// </head>
// <body class="page">
// <div class="page__content">
//   <main class="page__section content">
//     <h1 class="content__title">
//       Оформите подписку
//     </h1>
//     <form class="form">
//       <label class="form__field">
//         Введите ваш email:
//         <input type="email" class="form__input" required minlength=7 maxlength=25>
//       </label>
//       <label class="form__field form__field_type_row">
//         <input class="form__checkbox" type="checkbox" required>
//         <span class="form__checkbox-item"></span>
//         <span class="form__text">Согласие на обработку персональных данных</span>
//       </label>
//       <button type="submit" class="button">
//         Подписаться на уведомления
//       </button>
//     </form>
//   </main>
// </div>
// <script src="script.js"></script>
// </body>
// </html>

//y3.1

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

//y3.2

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity)
});

//y4.1

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

const showError = (input) => {
  input.classList.add('form__input_type_error')
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error')
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

//y4.2
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

const showError = (input) => {
  input.classList.add('form__input_type_error')
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error')
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

//y4.3
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
// 1. Определите formError.
const formError = formElement.querySelector(`.${formInput.id}-error`)
const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = formInput.errorMessage
  formError.classList.add('form__input-error_active')
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});

//y4.4

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
  formError.classList.remove('form__input-error_active')
  formError.textContent = ''
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});

//y6.1
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  } )
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) 
    {buttonElement.classList.add('button_inactive')}
  else
    {buttonElement.classList.remove('button_inactive')}
}
//y6.2


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  } )
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) 
    {buttonElement.classList.add('button_inactive')}
  else
    {buttonElement.classList.remove('button_inactive')}
}

//y6.3

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'))
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset)
    })
  });
};

enableValidation();


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  } )
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) 
    {buttonElement.classList.add('button_inactive')}
  else
    {buttonElement.classList.remove('button_inactive')}
}

//y6.4

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit')
  toggleButtonState(inputList, buttonElement)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement)
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'))
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset)
    })
  });
};

enableValidation();


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  } )
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) 
    {buttonElement.classList.add('button_inactive')}
  else
    {buttonElement.classList.remove('button_inactive')}
}