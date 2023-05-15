//ДИСКЛЕЙМЕР: все могло устареть. Актуально на 5ое мая 2023.
//html код закомментирован всегда, перед использованием раскомментить.
// в случае изменений в нескольких файлов все файлы будут представлены, сначала идет номер урока, затем - название файла, код, название файла, код.

//пПродвинутый JavaScript. Асинхронность

//y2.1

const tweets = [
  'Какой-то странный тред',
  'Твит, адресованный Илону Маску',
  'Ответ на инфоповод'
];

function forEach(arr, callback) {
  for (let index = 0; index <= arr.length; index++) {
    callback(arr[index])
  }}

forEach(tweets, function (tweet) {
	console.log(tweet);
});

//y3.1

function handleImageLoad(evt) {
  // после загрузки добавим элемент изображения в DOM
  document.body.append(evt.target);
}

// дополните код функции
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.onerror = errorCallback
  img.onload = loadCallback;
}

loadImage(
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg',
  handleImageLoad
);


//y3.2

function handleImageLoad(evt) {
  // после загрузки добавим элемент изображения в DOM
  document.body.append(evt.target);
}

function handleLoadError() {
  console.log('Всё идёт не по плану')
}

// дополните код функции
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

loadImage(
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg',
  handleImageLoad, handleLoadError
);


//y4.1
function consoleDate() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(consoleDate, 1000)

//y6.1

function wait(ms) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
});
  return promise
} 
  
wait(2000)
  .then(() => console.log('Прошло 2000мс'));


//y6.2

// исправьте тело функции loadImage
function loadImage(imageUrl) {
  const promise = new Promise(function(resolve, reject) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.onerror = reject;
    image.onload = resolve
  })
  return promise;
}

// работать должно так
loadImage('https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg')
  .then((evt) => {
    document.body.append(evt.target);
  })
  .catch(() => {
    console.error('Всё идёт не по плану.');
  });

//работа с API. Введение

//Y3.1

fetch('https://swapi.nomoreparties.co/people').then(console.log())

//y4.1

const user = {
  name: 'Иван',
  age: 30,
  hasDog: true,
  dog: {
    name: 'Бонни',
    age: 6
  }
};


const userDeepCopy = JSON.parse(JSON.stringify(user))

console.log(user === userDeepCopy); // false
console.log(user.dog === userDeepCopy.dog); // false
console.log(user.name === userDeepCopy.name); // true
console.log(user.dog.name === userDeepCopy.dog.name); // true
  
//y4.2

fetch('https://api.kanye.rest').then(res => 
  res.json()).then(data => console.log(data))

//y4.3 

const quoteElement = document.querySelector('.quote');


  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });

//y4.4

const quoteElement = document.querySelector('.quote');


function updateQuote() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
} 

const button = document.querySelector('.header__btn') 
button.addEventListener('click', updateQuote)

//y5.1

// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {res.json();}).then((data) => console.log(data))
}

getPosts();

//y5.2

// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

const container = document.querySelector('.container');

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then((posts) => {posts.forEach((post) => {
    addPostToDOM(container, createPostMarkup(post));
  });
 });
}

getPosts();

//y5.3

// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function createPost(newPost) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: newPost.title,
    body: newPost.body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value
  });
});

//y5.4

// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function createPost(newPost) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: newPost.title,
    body: newPost.body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((posts) => {posts.forEach((post) => {
    addPostToDOM(document.querySelector('.container'), createPostMarkup(post))
  });
    
  });
}

// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value
  });
});

//y6.1 

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

form.addEventListener('submit', function submit(e) {
  e.preventDefault();
});


//y6.2

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

form.addEventListener('submit', function submit(e) {

  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      console.log('Всё хорошо')
    }
  })
});


//y6.3

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

form.addEventListener('submit', function submit(e) {
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      console.log('Всё хорошо')
    }
  })
});


//y6.4
const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

form.addEventListener('submit', function submit(e) {
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    else {
      return Promise.reject(res.status)
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(`Ошибка: ${err}`));})

//y6.5

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

form.addEventListener('submit', function submit(e) {
  search(form.elements.entity.value, form.elements.entityId.value)
    .then((res) => {
      if (res.ok) {
        return res.json(); // возвращаем вызов метода json
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      renderResult(res.name);
    })
    .catch((err) => {
      renderError(`Ошиька ${err}`);
    }); 
})



//y6.6
const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add('spinner_visible')
    content.classList.add('content_hidden')
  }
  else {
    spinner.classList.remove('spinner_visible')
    content.classList.remove('content_hidden')
  }
}

form.addEventListener('submit', function submit(e) {
  search(form.elements.entity.value, form.elements.entityId.value)
    .then((res) => {
      if (res.ok) {
        return res.json(); // возвращаем вызов метода json
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      renderResult(res.name);
    })
    .catch((err) => {
      renderError(`Ошиька ${err}`);
    }); 
})



//y6.7

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add('spinner_visible')
    content.classList.add('content_hidden')
  }
  else {
    spinner.classList.remove('spinner_visible')
    content.classList.remove('content_hidden')
  }
}

form.addEventListener('submit', function submit(e) {
  renderLoading(true);
  search(form.elements.entity.value, form.elements.entityId.value)
    .then((res) => {
      if (res.ok) {
        return res.json(); // возвращаем вызов метода json
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      renderResult(res.name);
    })
    .catch((err) => {
      renderError(`Ошиька ${err}`);
    })
    .finally(() => {renderLoading(false)})
})



//дрочево с прототипами, которое у вас спросят кучу раз на собесе и которым вы не будете пользоваться пушто все на хуках тыщу лет кекв

//y2.1

const first = {
  one: 'Раз'
};

const second = {
  two: 'Два'
};

const third = {
  three: 'Три'
};

second.__proto__ = first;
third.__proto__ = second;

console.log(second.one); // "Раз"
console.log(third.one); // "Раз"
console.log(third.two); // "Два"

//y3.1

const methods = {
  getFullName: function () {
    console.log(`${human.firstName} ${human.lastName}`);
  }
};

// создайте объект human здесь

const human = Object.create(methods);

human.firstName = 'Никола';
human.lastName = 'Тесла';

human.getFullName(); // "Никола Тесла"


//y4.1

// напишите код здесь

const tweet1 = new Tweet(
  'I’m starting a candy company & it’s going to be amazing',
  'Elon Musk'
);

const tweet2 = new Tweet(
  'The United States has VERY LOW INFLATION, a beautiful thing!',
  'Donald Trump'
);

const tweet3 = new Tweet('Vk mho cucumber', 'Дмитрий Медведев');

function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

console.log(tweet1.user); // "Elon Musk"
console.log(tweet2.user); // "Donald Trump"
console.log(tweet3.text); // "Vk mho cucumber"


//y5.1

function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

// напишите код здесь

Tweet.prototype.post = function(){
  console.log(this.text);
  console.log(this.user);
}

const tweet1 = new Tweet(
  'I’m starting a candy company & it’s going to be amazing',
  'Elon Musk'
);

tweet1.post();


//y5.2

function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

Tweet.prototype.post = function () {
  console.log(this.user);
  console.log(this.text);
};

Tweet.prototype.edit = function(text) {
  this.text = text;
}
// напишите код здесь

const tweet1 = new Tweet(
  'I’m starting a candy company & it’s going to be amazing',
  'Elon Musk'
);

tweet1.post();

/*
  "I’m starting a candy company & it’s going to be amazing"
  "Elon Musk"
*/

tweet1.edit('Never mind');
tweet1.post();

/*
  "Never mind"
  "Elon Musk"
*/

//y6.1

class Tweet {
  constructor(text, user) {
    this.text = text;
    this.user = user;
  }

  post() {
    console.log(this.user);
    console.log(this.text);
  }
  
  edit(text) {
    this.text = text;
  }
}

//y7.1

const arr = [1, 2, 3];

console.log(arr.__proto__); // выведите Array.prototype
console.log(arr.__proto__.__proto__); // выведите Object.prototype


//y8.1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}


//y8.2 

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height
  }
}


//y8.3 
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }
}
