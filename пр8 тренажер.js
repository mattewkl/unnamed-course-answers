//ДИСКЛЕЙМЕР: все могло устареть. Актуально на 5ое мая 2023.
//html код закомментирован всегда, перед использованием раскомментить.
// в случае изменений в нескольких файлов все файлы будут представлены, сначала идет номер урока, затем - название файла, код, название файла, код.


//Новый синтаксис - деструктуризация

const   { elements } = document.forms.myForm;

const { artist, song } = elements

console.log(artist);
console.log(song);

//ооп в интерфейсах. Продолжение

//y2.1

// <!doctype html>
// <html lang="ru">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport"
//         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Card Preview</title>
//   <link rel="stylesheet" href="index.css">
// </head>
// <body class="page">
// <main class="content page__content">
//   <div class="filter content__filter">
//     Отображение:
//     <button type="button" class="button filter__button filter__button_type_grid" data-elements-type="grid"></button>
//     <button type="button" class="button filter__button filter__button_type_column" data-elements-type="column"></button>
//   </div>
//   <section class="card-list">
//     <header class="heading">
//       <h2 class="heading__title">
//         Результат
//       </h2>
//     </header>
//     <div class="card-list__items">
//       <!-- Контейнер для добавления карточек -->
//     </div>
//   </section>
// </main>
// <div class="popup">
//   <div class="popup__content">
//     <button type="button" class="popup__close"></button>
//     <img src="https://code.s3.yandex.net/web-code/oop/card_detail.jpg" alt="" class="popup__image">
//     <p class="popup__caption"></p>
//   </div>
// </div>

// <!--Шаблон обычной карточки-->
// <template class="default-card">
//   <article class="card">
//     <div class="card__image" style=""></div>
//     <h3 class="card__title"></h3>
//     <p class="card__property"></p>
//     <button class="button classic-button card__button">
//       Узнать больше
//     </button>
//   </article>
// </template>

// <!-- Шаблон горизонтальной карточки -->
// <template class="horizontal-card">
//   <article class="card card_content_horizontal">
//     <div class="card__image" style="background-image: url('https://code.s3.yandex.net/web-code/oop/card_detail.jpg');"></div>
//     <div class="card__description">
//       <h3 class="card__title">
//         Конструктор-робот
//       </h3>
//       <p class="card__info">
//         Это популярная серия программируемых робототехнических конструкторов компании Robotis.
//         Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим
//         робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач.
//         Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания
//         уникального вида собранным моделям
//       </p>
//       <p class="card__property"></p>
//       <span class="card__span-accent">
//         Цена:
//         <span class="card__price-property">
//           126 000
//         </span>
//       </span>
//       <button class="button classic-button card__button">
//         В корзину
//       </button>
//     </div>
//   </article>
// </template>

// <script type="module" src="./pages/index.js"></script>
// </body>
// </html>


//y2.2 

//index.js

import {defaultCardButton, horizontalCardButton} from '../utils/constants.js'

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    popupCaption.textContent = this._description;
    super._handleOpenPopup();
  }

  _handleClosePopup() {
    popupCaption.textContent = '';
    super._handleClosePopup();
  }
}

class HorizontalCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;

    return this._element;
  }
}

const renderElements = (isGrid) => {
  cardList.innerHTML = '';
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};

defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

renderElements();


//constants.js

const items = [
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID',
    description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
    price: '82 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID Premium kit',
    description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
    price: '126 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
    title: 'Airwheel',
    description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
    price: '145 000'
  },
];

const cardList = document.querySelector('.card-list__items');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
export const defaultCardButton = document.querySelector('.filter__button_type_grid');
export const horizontalCardButton = document.querySelector('.filter__button_type_column');

//y2.3

//index.js

import { defaultCardButton, horizontalCardButton} from '../utils/constants.js';
import { renderElements } from '../utils/utils.js'

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    popupCaption.textContent = this._description;
    super._handleOpenPopup();
  }

  _handleClosePopup() {
    popupCaption.textContent = '';
    super._handleClosePopup();
  }
}

class HorizontalCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;

    return this._element;
  }
}



defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

renderElements();


//constants.js

export const items = [
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID',
    description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
    price: '82 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID Premium kit',
    description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
    price: '126 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
    title: 'Airwheel',
    description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
    price: '145 000'
  },
];

export const cardList = document.querySelector('.card-list__items');
export const popupElement = document.querySelector('.popup');
export const popupCloseButton = document.querySelector('.popup__close');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
export const defaultCardButton = document.querySelector('.filter__button_type_grid');
export const horizontalCardButton = document.querySelector('.filter__button_type_column');

//utils.js

import {cardList, items} from './constants.js'
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js'

export const renderElements = (isGrid) => {
  cardList.innerHTML = '';
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};

//y2.4

//index.js

import { defaultCardButton, horizontalCardButton } from '../utils/constants.js';
import { renderElements } from '../utils/utils.js';

renderElements();

//DefaultCard.js

import { popupCaption } from '../utils/constants.js';
import Card from './Card.js'

export default class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    popupCaption.textContent = this._description;
    super._handleOpenPopup();
  }

  _handleClosePopup() {
    popupCaption.textContent = '';
    super._handleClosePopup();
  }
}

//HorizontalCard.js

import Card from './Card.js'

export default class HorizontalCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;

    return this._element;
  }
}

defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

//Card.js

import { popupImage, popupElement, popupCloseButton } from '../utils/constants.js';
export default class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

//y3.1
//Section.js
export  default class Section {
  constructor({data}, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }
}


//y3.2
//Section.js

export  default class Section {
  constructor({data}, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }
  
  setItem(element) {
    this._container.append(element);
  }
  
  clear() {
    this._container.innerHTML = '';
  }

}

//y3.3 
//Section.js

import DefaultCard from './DefaultCard.js'
import HorizontalCard from './HorizontalCard.js'

export default class Section {
  constructor({data}, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }
  
  setItem(element) {
    this._container.append(element);
  }
  
  clear() {
    this._container.innerHTML = '';
  }
  
  renderItems(isGrid) {
    this.clear()
    this._renderedItems.forEach((item) => {
      const card = isGrid
        ? new DefaultCard(item, '.default-card')
        : new HorizontalCard(item, '.horizontal-card');

      const cardElement = card.generateCard(); 
      this.setItem(cardElement)
    })
  }
}

//y3.4 
//index.js

import Section from '../components/Section.js'
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items
} from '../utils/constants.js';

const defaultCardList = new Section({ data: items }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(false);
});

defaultCardList.renderItems(); 

//y5.1

//Section.js

import DefaultCard from './DefaultCard.js';
import HorizontalCard from './HorizontalCard.js';

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  setItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(isGrid) {
    this.clear();

    this._renderedItems.forEach(item => {
      const card = isGrid
        ? new DefaultCard(item, '.default-card')
        : new HorizontalCard(item, '.horizontal-card');

      const cardElement = card.generateCard();

      this.setItem(cardElement);
    });
  }
}

//index.js

import Section from '../components/Section.js';
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items
} from '../utils/constants.js';

const defaultCardList = new Section({ data: items }, cardListSelector);
const horizontalCardList = new Section({ data: items, renderer: () => {} }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(false);
});

defaultCardList.renderItems();

//y5.2

//Section.js

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  setItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach(item => {
      this._renderer(item)

      this.setItem(cardElement);
    });
  }
}

//index.js



import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items
} from '../utils/constants.js';

const defaultCardList = new Section({ data: items,  renderer: () => {
  const card = isGrid
        ? new DefaultCard(item, '.default-card')
        : new HorizontalCard(item, '.horizontal-card');

      const cardElement = card.generateCard();
} }, cardListSelector);
const horizontalCardList = new Section({ data: items, renderer: () => {
  const card = isGrid
        ? new DefaultCard(item, '.default-card')
        : new HorizontalCard(item, '.horizontal-card');

      const cardElement = card.generateCard();
} }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(false);
});

defaultCardList.renderItems();

//y5.3 
//index.js

import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items
} from '../utils/constants.js';

const defaultCardList = new Section({ data: items,  renderer: (item) => {
  const card = new DefaultCard(item, '.default-card')
  const cardElement = card.generateCard();
  defaultCardList.setItem(cardElement)
} }, cardListSelector);


const horizontalCardList = new Section({ data: items, renderer: (item) => {
  const card = new HorizontalCard(item, '.horizontal-card')
  const cardElement = card.generateCard();
  horizontalCardList.setItem(cardElement)
} }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems();
});

horizontalCardButton.addEventListener('click', () => {
  horizontalCardList.renderItems();
});

defaultCardList.renderItems();

//y6.1

//filterButton.js
export default class FilterButton {
  constructor({ data }, buttonSelector) {
    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;

  }
  _getTemplate() {
    const buttonElement = document
    .querySelector(this._buttonSelector)
    .content
    .querySelector('.filter__button')
    .cloneNode(true);
    return buttonElement;
  }
  
  generateButton() {
    this._element = this._getTemplate();
    this._element.classList.add(this._additionalButtonClass)
    
    return this._element
  }
}

//y6.2 
//index.js
import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items,
  filterButtons,
  fileterListSelector
} from '../utils/constants.js';


const filterList = new Section({data: filterButtons, renderer: () => {}, filterListSelector})
const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems();
});

horizontalCardButton.addEventListener('click', () => {
  horizontalCardList.renderItems();
});

defaultCardList.renderItems();

//y6.3 
//index.js 
import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import FilterButton from '../components/FilterButton.js'
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items,
  filterButtons,
  fileterListSelector,
  filterButtonTemplate
} from '../utils/constants.js';


const filterList = new Section({data: filterButtons, renderer: (item) => {
  const filterButton = new FilterButton({data : item}, filterButtonTemplate);
  const filterButtonElement = filterButton.generateButton()
  filterList.setItem(filterButtonElement);
}, filterListSelector})
const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems();
});

horizontalCardButton.addEventListener('click', () => {
  horizontalCardList.renderItems();
});

defaultCardList.renderItems();
filterList.renderItems()


//y7.1

//FilteredButton.js
export default class FilterButton {
  constructor({ data, handleButtonClick }, buttonSelector) {
    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;
    this._handleButtonClick = handleButtonClick;
    this._isGrid = data.isGrid;
    

  }
  _getTemplate() {
    const buttonElement = document
    .querySelector(this._buttonSelector)
    .content
    .querySelector('.filter__button')
    .cloneNode(true);
    return buttonElement;
  }
  
  generateButton() {
    this._element = this._getTemplate();
    this._element.classList.add(this._additionalButtonClass)
    this._setEventListeners()
    
    return this._element
  }
  
  _setEventListeners() {
    this._element.addEventListener('click', () => this._handleButtonClick(this._isGrid))
  }
}


//y7.2 
//index.js

import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import FilterButton from '../components/FilterButton.js'
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items,
  filterButtons,
  fileterListSelector,
  filterButtonTemplate
} from '../utils/constants.js';



const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);
const filterList = new Section({data: filterButtons, renderer: (item) => {
  const filterButton = new FilterButton({data : item, handleButtonClick: (isGrid) => {
    if (isGrid) {
      defaultCardList.clear()
      defaultCardList.renderItems()}
    else {
      horizontalCardList.clear()
      horizontalCardList.renderItems()
    }
    }
  }, filterButtonTemplate);
  const filterButtonElement = filterButton.generateButton()
  filterList.setItem(filterButtonElement);
}, filterListSelector})

defaultCardList.renderItems();
filterList.renderItems()

//привязка this и потеря контекста

//y3.1

window.hiMyNameIs = 'What?';

function slimShady() {
  console.log(this.hiMyNameIs);
}

slimShady();

//y3.2

const sendButton = {
  message: 'Меня нажали',
  click: function () {
    console.log(this.message);
  }
};

const anotherButton = {
  message: 'И меня нажали',
};

const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');

button1.addEventListener('click', sendButton.click.bind(sendButton));
button2.addEventListener('click', sendButton.click.bind(anotherButton));
