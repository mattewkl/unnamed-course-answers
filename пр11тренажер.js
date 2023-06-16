
//React Router
//y2.1
import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Reviews from './Reviews'
import AboutMe from './AboutMe'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />

      </Routes>
    </div>
  );
}

export default App;

//y2.2

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Diary from './Diary';


function App() {
  return (
    <BrowserRouter>
      <Diary />
      <Header />
    </BrowserRouter>
  );
}

export default App;

//y2.3

import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Diary />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;


//y3.1
//App.js

import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Reviews from "./Reviews";
import AboutMe from "./AboutMe";
import Header from './Header';
import AboutUs from './AboutUs'

import { Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-us" element={<AboutUs />} ></Route>
      </Routes>
    </div>
  );
}

export default App;

//NavBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Домой</NavLink>
      <NavLink to="/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обзоры эмодзи</NavLink>
      <NavLink to="/about-me" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обо мне</NavLink>
      <NavLink to="/about-us">
        О нас
      </NavLink> 
    </nav>
  )
}

export default NavBar;

//y3.2

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Домой</NavLink>
      <NavLink to="/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обзоры эмодзи</NavLink>
      <NavLink to="/about-me" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обо мне</NavLink>
      <NavLink to="/about-us" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`} >О нас</NavLink>
    </nav>
  )
}

export default NavBar;

//y3.3

import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'



function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}  >Домой</NavLink>
      <NavLink to="/tips" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`} >Советы</NavLink>
    </nav>
  );
}

export default NavBar;



//y4.1

import React from 'react';
import './AboutUs.css';
import { Outlet } from 'react-router-dom'

function AboutUs () {
  return (
    <div className="about-us">
      <Outlet />
    </div>
  )
}

export default AboutUs;


//y4.2
import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Reviews from "./Reviews";
import AboutMe from "./about-me/AboutMe";
import AboutUs from "./about-us/AboutUs";
import Header from './Header';

import { Route, Routes } from 'react-router-dom';
import MyStory from "./about-me/MyStory";
import Hobbies from "./about-me/Hobbies";
import Contact from "./about-me/Contact";
import SiteHistory from './about-us/SiteHistory.js'
import SiteMission from './about-us/SiteMission.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} >
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//y4.3

import React from 'react';
import './AboutUs.css';
import {Outlet, Link} from "react-router-dom";

function AboutUs () {
  return (
    <div className="about-us">
      <h2>О нас</h2>
      <ul className="links">
        <li>
          <Link to={`site-history`}>История приложения</Link>
        </li>
        <li>
          <Link to={`site-mission`}>Наша миссия</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AboutUs;

//y5.1

import React from 'react';
import './App.css';
import {useParams} from 'react-router-dom'

function Doubler() {
  const { number } = useParams();
  return (
    <>
      <p>{ number  }</p>
    </>
  );
}

export default Doubler;

//y5.2

import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Doubler() {
  const { number } = useParams();

  if (isNaN(number)) {
    // если значение не числовое, будет запущен этот код
    return null;
  }

  // если обнаружено число, будет запущен этот код
  return (
    <p>Обнаружен числовой URL-адрес. Результат удвоения: {number * 2}</p>
  );
}

export default Doubler;


//5.3

import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

function Reviews (props) {
  return (
    // необходимо изменить код внутри метода map
    <>
      <ul className="reviews">
        {props.reviews && props.reviews.map((review)=>{
          return <li key={review.id} className="reviews__item"><Link to={`${review.id}`}>{review.title}</Link></li>
        })}
      </ul>
    </>
  )
}

export default Reviews;

//5.4

import React from 'react';
import './Review.css';
import { useParams } from 'react-router-dom';

function Review (props) {
  let { reviews } = props;
  let { id } = useParams();
  // the object keys start with 0, but the IDs in the API begin at 1
  id = id - 1;

  return (
    <div className="review">
      {
        reviews &&
          <div className="review__item">
            <h3>{reviews[id].title}</h3>
            <p>{reviews[id].text}</p>
            <p className="review__rating">Рейтинг:{reviews[id].rating}/5</p>
          </div>
      }

    </div>
  );
}

export default Review;

//6.1

import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Friends from './Friends';
import Friend from './Friend';
import Dashboard from './Dashboard';
import serverData from '../serverData';
import PageNotFound from './PageNotFound'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className="header">
          <NavLink to='/' className="header__logo">Parrot Friendship Society</NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item"><NavLink className="menu__link" to='/friends'>Друзья</NavLink></li>
              <li className="menu__list-item"><NavLink className="menu__link" to='/news'>Новости</NavLink></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/friends' element={<Friends serverData={serverData} />} />
          <Route path='/friends/:id' element={<Friend serverData={serverData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Работа с данными

//y2.1
function App() {
  const [size, setSize] = React.useState(0);
  return (
    <>
      <Slider value={size} onChange={handleChange} />
    </>
  );
}

function Slider(props) {  
  function handleChange(e) {
    setSize(e.target.value);
  }

  return (
    <div id="slider-container">
      <input type="range" min="0" max="100" value={props.size} onChange={props.onChange} />
      <div className="counter">{size}</div>
    </div>
  );
}

ReactDOM.render((
  <App  value={size} onChange={handleChange}/>
), document.querySelector('#root'));



//y2.2

function App() {
  const [size, setSize] = React.useState(0);

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  return (
    <>
      <Slider onChange={handleSizeChange} size={size} />
      <Bubbles size={size}/>
    </>
  );
}

function Slider(props) {
  return (
    <div id="slider-container">
      <input type="range" min="0" max="100" value={props.size} onChange={props.onChange} />
      <div className="counter">{props.size}</div>
    </div>
  );
}

function Bubbles(props) {
  // Наиболее простой способ отрисовать RandomBubble 20 раз подряд:
  return Array.from(Array(20), (_, i) => (
    <RandomBubble key={i} size={props.size} />
  ));
}

function RandomBubble(props) {
  // Используем стейт, чтобы запомнить исходные параметры при первом рендере
  const [initialStyle] = React.useState({
    top: getRandomInt(0, document.body.offsetHeight),
    left: getRandomInt(0, document.body.offsetWidth),
    backgroundColor: `#${getRandomInt(0, (256 ** 3) - 1).toString(16)}`,
  });
  const [initialScale] = React.useState(getRandomInt(1, 10) / 20);

  return (
    <div className="bubble" style={{
      ...initialStyle,
      // Исходный масштаб домножается на значение props.size или на 0, если props.size не задан
      transform: `scale(${initialScale * (props.size || 0)})`,
    }} />
  );
}

// Возвращает случайное целое число в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));


//y5.1
import React from 'react';


export const translations = {
  ru: {
    title: 'Империя матрасов',
    subscribeCaption: 'Заполните форму ниже, чтобы узнать об открытии «Империи матрасов» первыми!',
    subscribeButton: 'Удивите меня!',
    subscribeSuccess: 'Благодарим вас за подписку. Мы свяжемся с вами, когда царство комфорта откроется!',
  },
  en: {
    title: 'Emperor Mattress',
    subscribeCaption: 'Sign up below and we’ll let you know when we launch the next great mattress experience!',
    subscribeButton: 'Amaze me!',
    subscribeSuccess: 'Thanks. When the kingdom of comfort opens, we’ll be in touch!',
  },
};

export const TranslationContext = React.createContext();


//y5.2

import React from 'react';
import Header from './landing/Header';
import Bed from './landing/Bed';
import InfoForm from './landing/InfoForm';
import LangSelect from './LangSelect';
import { TranslationContext, translations } from '../contexts/translation/TranslationContext';
import './App.css';

function App() {
  const [lang, setLang] = React.useState('en');

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Header />
        <Bed />
        <InfoForm />
      </TranslationContext.Provider >  
      <LangSelect onLangSelect={setLang} />
    </div>
  );
}

export default App;

//y5.3

import React from 'react';
import './Header.css';
import { TranslationContext } from '../../contexts/translation/TranslationContext'



function Header() {
  const translation = React.useContext(TranslationContext)
  return (
    <h1 className="header-title">{translation.title}</h1>
  );
}

export default Header;

//y5.4

import React from 'react';
import './InfoForm.css';
import { TranslationContext } from '../../contexts/translation/TranslationContext'

class InfoForm extends React.Component {
  static contextType =  TranslationContext
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      userEmail: '',
    };
    
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  handleChange = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  render() {
    if (this.state.submitted) {
      return (
        <p className="infoForm-text">
          {this.context.subscribeSuccess}
        </p>
      );
    }
    return (
      <div className="infoForm-container">
        <p className="infoForm-text"> {this.context.subscribeCaption}</p>
        <form onSubmit={this.handleSubmit} className="infoForm-form">
          <input onChange={this.handleChange} className="infoForm-input" type="email" placeholder="E-mail" />
          <button className="infoForm-button" type="submit"> {this.context.subscribeButton}</button>
        </form>
      </div>
    );
  }
}

export default InfoForm;


//REACT Важное

//y2.1

import React, { useState, useEffect } from 'react';
import './Tips.css';

function Tips() {
  useEffect(() => {
    fetch('https://api.nomoreparties.co/todays-tips-rus').then((res) => {
      return res.json();
    }).then((res) => {
      setList(Object.values(res));  
    })
  }, []);
  const [list, setList] = useState();
  return (
    <div className="tips">
      <ul className="tips__list">
      {list &&  list.map((item, index) => {return (
  <li key={index} className="tips__item">{item.tip}</li>
); }, index)
        /* используйте тут метод map для создания списка */
      }
      </ul>
    </div>
  );
}

export default Tips;

//y3.1

import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      calories: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
     this.setState({
   [e.target.name]: e.target.value
   })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    

    this.props.handleSubmit(this.state.food, this.state.calories);
    this.setState({
      food: '',
      calories: ''
    })
  }

  render() {
    // добавьте элементами обработчики handleSubmit и handleChange
    return (
      <form className="food-adder" onSubmit={this.handleSubmit} >
        <input name="food" value={this.state.food} type="text" required placeholder="Добавьте продукты" onChange={this.handleChange}/>
        <input name="calories" value={this.state.calories} type="number" required placeholder="Калории" onChange={this.handleChange} />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;

//y4.1

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
    this.signature = React.createRef();
    this.handleSkip = this.handleSkip.bind(this);
  }
  handleSubmit = () => {
    this.setState({
      message: 'Ваше соглашение принято. Большая ошибка!'
    })
  }
  handleSkip = () => {
    this.signature.current.focus()
  }
  render(){
    return (
      <div className="app">
        <h1>Important Contract</h1>
          <div className="input">
          <button className="input__button" onClick={this.handleSkip}>
            Скучно! Не хочу читать этот договор!
          </button>
          </div>
          <p className="app__text">
            Это очень важный юридический документ, требующий исключительной внимательности при прочтении.
          </p>
          <p className="app__text">
            При разработке новых версий программного обеспечения вы обязуетесь... и так далее, 
            и тому подобное... В случае обнаружения несоответствия каким-либо существующим 
            соглашениям вы несёте всю ответственность... Что-то глаза слипаются...
          </p>
          <p className="app__text">
            Протоколы, документы, лицензии! Слияния и поглощения! Подписывая настоящий договор, 
            вы подтверждаете, что ознакомлены с содержанием каждого названного документа, и 
            соглашаетесь со всеми условиями, указанными в настоящем договоре и перечисленных документах. 
            Мы предупредили!
          </p>
          <div className="input">
            <input ref={this.signature} type="text" className="input__name" placeholder="Ваше полное имя" />
            <input onClick={this.handleSubmit} type="submit" className="input__button" value="Я соглашаюсь со всеми условиями!" />
          </div>
          <p className="app__message">{this.state.message}</p>
      </div>
  );
  }
}

export default App;

//y5.1
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    p {
      text-align: center;
    }
  </style>
</head>
<body>

<div id="root"></div>
<script type="text/jsx">
  class Loggor extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Это ваше героическое испытание.'
      };
    }
    componentDidMount(){
      // код внутри этого метода нельзя менять!
      setInterval(() => {
        this.setState({
          message: 'Это ваше героическое испытание.'
        })
      }, 5000);

    }

    render() {
      // код внутри этого метода тоже нельзя менять!
      console.log('Ха-ха-ха-ха!');

      return (
        <>
          <p>Это сообщение будет выводиться в консоль каждые 5 секунд. Ничто не сможет меня остановить!</p>
          <p>С любовью, ваш заклятый враг</p>
          <p><strong>Логгор</strong></p>
        </>
      );
    }
  }

  ReactDOM.render((
      <Loggor />
  ), document.querySelector('#root'));
</script>
</body>
</html>

// подготовка к собесу - ебучие доски

//6.1
function reverseWords(str) {

  return str.split(' ').reverse().join(' ');
}

reverseWords('всегда много путей достичь цель есть'); // "есть цель достичь путей много всегда"
reverseWords('испробовать их все должны вы'); // "вы должны все их испробовать"


//6.2

const capitalize = str => 
  str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')


capitalize('Надоел, надоел, надоел ты'); // Надоел, Надоел, Надоел Ты
capitalize('Надоели, надоели, надоели вы все'); // Надоели, Надоели, Надоели Вы Все
capitalize('Прошу уходи, уходи'); // Прошу Уходи, Уходи
capitalize('Уходи прошу, уходи совсем'); // Уходи Прошу, Уходи Совсем


//6.3

const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
   // find the count of vowels
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}




findVowels('здравствуй'); // 2
findVowels('привет'); // 2
findVowels('хеллоу'); // 3
