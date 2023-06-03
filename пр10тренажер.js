
//react первый подход

//y4.1
ReactDOM.render(
  (<div>
  <h2>Грустные факты о животных</h2>
  <p>
    Новорожденные слонята не умеют управлять хоботом.
  </p>
  <p>
    Зебры не могут спать в одиночестве.
  </p>
  <p>
    У пиявок 32 мозга.
  </p>
</div>
),
  document.querySelector('#root'));

//y4.2 
const zebras = 'Зебры';
const leeches = 'пиявок';
const elephants = 'слонята';

ReactDOM.render((
  <div>
    <h2>Грустные факты о животных</h2>
    <p>
      Новорожденные ${elephants} не умеют управлять хоботом.
    </p>
    <p>
      ${zebras} не могут спать в одиночестве.
    </p>
    <p>
      У ${leeches} 32 мозга.
    </p>
  </div>
), document.querySelector('#root'));


//y5.1 
const isGuest = false;

ReactDOM.render((
  <div>
   {isGuest ? (<h2>Добро пожаловать!</h2>) :
   (<h2>Как мы рады, что вы вернулись!</h2>) }
 </div>
 
 ), document.querySelector('#root'));
 
 //y5.2

 
ReactDOM.render((
  <div>
    <div className="item">Квадрат</div>
    <div className="item" style={{borderRadius:'50%'}}>Круг</div>
  </div>
), document.querySelector('#root'));

//y5.3




ReactDOM.render((
  <>
  <h2>Ученье — свет,</h2>
  <h3>а неученье — тьма</h3>
  </>
), document.querySelector('#root'));

//y6.1

const list = [{
  name: 'Хлеб',
  quantity: '1 батон',
}, {
  name: 'Ром',
  quantity: '3 бутылки',
}, {
  name: 'Кока-кола',
  quantity: '3 бутылки',
}, {
  name: 'Туалетная бумага',
  quantity: 'Вся, что есть',
}];

ReactDOM.render((
  <ul>
    {list.map((item, i) => (
    <li key={i}>
        <b>{item.name}</b>
        <i>{item.quantity}</i>
    </li>
    ))}
  </ul>
), document.querySelector('#root'));


//y6.2 

function handleKeyUp(e) {
  document.getElementById('title').innerText = e.target.value;
}

function handleClick(e) {
  document.getElementById('title').innerText += ' ' + e.target.textContent;
}

function handleMouseEnter(e) {
  e.target.classList.add('hover');
}

function handleMouseLeave(e) {
  e.target.classList.remove('hover');
}

function handleMouseDown(e) {
  e.target.classList.add('active');
}

function handleMouseUp(e) {
  e.target.classList.remove('active');
}

ReactDOM.render((
  <div>
    <input onKeyUp={handleKeyUp} type="text" / >
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>🤩</button>
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>🤯</button>
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >🤪</button>
  </div>
), document.querySelector('#root')))


//y7.1 Сначала удалить из Html разметку жирафа

function Giraffe(props) {
  return (
    <div className="giraffe">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>{props.height}</span>
      </div>
    </div>
  
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Giraffe icon="🦒" name="Жираф" height="Рост: 4 метра" />
  </>
), document.querySelector('#root'));


//y7.2
function Giraffe() {
  return (
    <div className="giraffe">
      <div className="icon">🦒</div>
      <div className="info">
        <h3>Жираф</h3>
        <span>Рост: 4 метра</span>
      </div>
    </div>
  );
}

function Hedgehog() {
  return (
      <div className="hedgehog">
      <div className="icon">🦔</div>
      <div className="info">
        <h3>Ёж</h3>
        <span>Рост: 15 сантиметров</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Giraffe />
    <Hedgehog />
    
  </>
), document.querySelector('#root'));



//7.3

function Animal(props) {
  return (
    <div className="animal">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>Рост: {props.height}</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Animal name="Жираф" icon="🦒"  height="4 метра"/>
    <Animal name="Ёж" icon="🦔"  height="15 сантиметров"/>
    <Animal name="Скунс" icon="🦨"  height="никто не мерял"/>

  </>
), document.querySelector('#root'));

//y7.4

function Animal(props) {
  // Получаем текущий час на часах
  const hours = new Date().getHours();
  // Проверяем, ночь ли сейчас
  const isNight = hours > 22 || hours < 6;
  // В зависимости от времени суток разные животные либо спят, либо бодрствуют
  const isSleeping = (isNight && !props.isNocturnal) || (!isNight && props.isNocturnal);

  return (
    <div className="animal">
      <div className="icon">{isSleeping ? '💤' : props.icon}</div>
      <div className="info">
        <h3> {props.name}</h3>
        <span>Рост: {props.height}</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Африка</h2>
    <Animal icon="🦒" name="Жираф" height="4 метра" isNocturnal={false}/>
    <Animal icon="🦔" name="Ёж" height="15 сантиметров" isNocturnal={true} />
    <Animal icon="🦨" name="Скунс" height="никто не мерял" isNocturnal={true} />
  </>
), document.querySelector('#root'));

//y8.1 

class Switch extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const className = `switch ${this.props.color} ${this.props.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}



ReactDOM.render((
  <>
    <Switch title="Счастье" color="blue" isActive={false} />
  </>
), document.querySelector('#root'));


//y8.2 

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  handleClick = () => {
    this.setState({isActive: !this.state.isActive})
  };

  render() {
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <Switch title="Счастье" color="blue" isActive={false} />
), document.querySelector('#root'));


//y8.3

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive,
    };
    
    
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick}  />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <>
    <Switch title="Счастье" color="blue" isActive={true} />
    <Switch title="Любовь" color="orange" isActive={false} />
    <Switch title="Шаверма" color="green" isActive={false} />
  </>
), document.querySelector('#root'));

//y9.1 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldShowScale: false };
  }

  handleChange = () => {
    this.setState({
      shouldShowScale: !this.state.shouldShowScale,
    });
  };

  render() {
    return (
      <>
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          Показать измеритель экрана
        </label>
        {this.state.shouldShowScale && <Scale />}
      </>
    );
  }
}

class Scale extends React.Component {
  constructor() {
    super();

    this.state = {
      windowSize: [window.innerWidth, window.innerHeight],
    };
  }

  handleWindowResize = () => {
    this.setState({
      windowSize: [window.innerWidth, window.innerHeight],
    });
  };

  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
  }
  
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <h3>Размер окна:</h3>
          <h2>{this.state.windowSize[0]} x {this.state.windowSize[1]}</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));


//y9.2

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldShowScale: false };
  }

  handleChange = () => {
    this.setState({
      shouldShowScale: !this.state.shouldShowScale,
    });
  };

  render() {
    return (
      <>
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          Показать измеритель экрана
        </label>
        {this.state.shouldShowScale && <Scale />}
      </>
    );
  }
}

class Scale extends React.Component {
  constructor() {
    super();

    this.state = {
      windowSize: [window.innerWidth, window.innerHeight],
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize = () => {
    this.setState({
      windowSize: [window.innerWidth, window.innerHeight],
    });
  };

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <h3>Размер окна:</h3>
          <h2>{this.state.windowSize[0]} x {this.state.windowSize[1]}</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));


//инструментарий реакта

//y4.1 


import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calorie-Zen</h1>
    </div>
  );
}

export default App;

//4.2 ПРОСТО ЗАМЕНИТЬ как просят в задании. Строка 27 файла index.html ес шо


//y6.1 изначальное содержимое return из апп хуярим в хедерjs
App.js

import React from 'react';
import './App.css';
import Header from './Header.js'
import AppContainer from './AppContainer.js'

function App() {
  return (
    <>
      <Header />
      <AppContainer/>
    </>
  );
}

export default App;


//y7.1 Header.js

import React from 'react';
import headerLogo from '../images/calorieZen.png'
function Header() {
  return (
    <div>
      <img src={headerLogo}/>
      <h1>Calorie-Zen</h1>
    </div>
  );
}

export default Header;

//y8.1 header.js

import React from 'react';
import headerLogo from '../images/calorieZen.png';
import './Header.css'

function Header() {
  return (
    <div className={header}>
      <img src={headerLogo} className={header__logo} />
      <h1 className={header__header}>Calorie-Zen</h1>
    </div>
  );
}

export default Header;

//y8.2 AppContainer.js

import React from 'react';
import './AppContainer.css'

function AppContainer() {
  return (
    <div className="container">
      <div className="calories">
        <h2>Калории:</h2>
      </div>
      <h2>Добавьте продукты</h2>
    </div>
  );
}

export default AppContainer;

//y9.1 Header.css
@font-face {
  src: url(../fonts/sumana.woff) format('woff');
  font-family: 'Sumana';
}


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
}

.header__logo {
  width: 100px;
}

.header__header {
  font-size: 44px;
  margin: 5px 0 0;
  line-height: 1;
  font-family: 'Sumana';
}


//y9.2 AppContainer.css
@font-face {
  src: url(../fonts/roboto.woff) format('woff');
  font-family: 'Roboto';
}


.container {
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  min-height: 70vh;
  margin-top: 50px;
}

.calories {
  width: 250px;
  border: 2px solid #F29279;
  border-radius: 20px;
  text-align: center;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.container h2 {
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 25px;
}



//y10.1

//foodAdder.js

import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList : [ ],
    }
  }

  handleSubmit = () => {
    
  }

  render() { return (
    <form className="food-adder">
      <input type="text" placeholder="Добавьте продукты" />
      <button className="food-adder__submit"></button>
    </form>
  )}

}
  

export default FoodAdder;


//AppContainer.js

import React from 'react';
import './AppContainer.css';
import FoodAdder from './FoodAdder.js';
function AppContainer() {
  return (
    <div className="container">
      <div className="calories">
        <h2>Калории:</h2>
      </div>
      <FoodAdder/>
    </div>
  );
}

export default AppContainer;


//y13.1 

function secret(secretMessage){
  console.log(secretMessage)
}

secret("медведь выпьет рюмку в 8 утра");

// Хуки (правой)

y2.1 

function Boxing() {
  const [isKnockout, setIsKnockout ] = React.useState();

  function handleClick() {
    setIsKnockout(true);
  }

  return (
    <div>
      {!isKnockout ? (
        <>
          <span>🤨</span>
          <button onClick={handleClick}>Hook!</button>
        </>
      ) : (
        <span>🥴</span>
      )}
      <span>🥊</span>
    </div>
  );
}

ReactDOM.render((
  <Boxing />
), document.querySelector('#root'));



function Switch(props) {
  const [isActive, setIsActive] = React.useState(false);


  handleClick() {
    setIsActive(!isActive);
  };
  
  render() {
    return (
      <div className={className}>
        <button className="img" onClick={handleClick} />
        <h3>{title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <Switch title="Счастье" color="blue" isActive={false} />
), document.querySelector('#root'));


//y2.2

function Switch(props) {
  const [isActive, setIsActive] = React.useState(false);


  function handleClick() {
    setIsActive(!isActive);
  };
  
  const className = `switch ${props.color} ${isActive ? 'on' : 'off'}`;

  return (
      <div className={className}>
        <button className="img" onClick={handleClick} />
        <h3>{props.title}</h3>
      </div>
  );
  }


ReactDOM.render((
  <Switch title="Счастье" color="blue" isActive={false} />
), document.querySelector('#root'));


//y2.3 

function GoodDeeds() {
  const [deeds, setDeeds] = React.useState([])

  function handleAddTask(e) {
    const input = e.target.previousSibling;

    setDeeds([...deeds, input.value])

    input.value = '';
  }

  return (
    <>
      <h3>Мои хорошие поступки</h3>
      <input type="text" placeholder="Поступок" />
      <button onClick={handleAddTask}>Добавить!</button>
      <ol>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ol>
    </>
  );
}

ReactDOM.render((
  <GoodDeeds />
), document.querySelector('#root'));


//y3.1 

function toggleBackground(shouldShow) {
  document.body.classList.toggle('with-bg', shouldShow);
}

function Beautifier() {
  const [isBeautiful, setIsBeautiful] = React.useState(false);

  React.useEffect((isBeautiful) =>
                  {toggleBackground(isBeautiful)}
  );

  function handleChange() {
    setIsBeautiful(!isBeautiful);
  }

  return (
    <label>
      <input type="checkbox" onChange={handleChange} />
      Включить красивый фон
    </label>
  );
}

ReactDOM.render((
  <Beautifier />
), document.querySelector('#root'));


//y3.2 

function App() {
  const [isCustomCursor, setIsCustomCursor] = React.useState();

  function handleChange() {
    setIsCustomCursor(!isCustomCursor);
  }

  
  function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        top: event.pageY,
        left: event.pageX,
      });
    }

        // Список действий внутри одного хука
    document.addEventListener('mousemove', handleMouseMove);
    document.body.classList.add('no-cursor');

        // Возвращаем функцию, которая удаляет эффекты
    return () => {
      document.body.classList.remove('no-cursor');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <img
      src="https://code.s3.yandex.net/web-code/react/cursor.svg"
      width={30}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        pointerEvents: 'none',
      }}
    />
  );
} 
  
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        Включить неоновый курсор
      </label>
      {isCustomCursor && <NeonCursor/>}
    </>
  );}
  
 


class NeonCursor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { top: 0, left: 0 };
  }

  componentDidMount() {
    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.classList.add('no-cursor');
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('no-cursor');
    document.removeEventListener('mousemove', handleMouseMove);
  }

  

  render() {
    return (
      <img
        src="https://code.s3.yandex.net/web-code/react/cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: this.state.top,
          left: this.state.left,
          pointerEvents: 'none',
        }}
      />
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));


//y4.1 

function playSound(fileName) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function App() {
  const [isTimeShown, setIsTimeShown] = React.useState();

  
  
  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }
   
  
  
  
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        Включить время (осторожно, звук!)
      </label>
      {isTimeShown && <Time/>}
    </>
  );
}

function Time() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [milliseconds, setMilliseconds] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    playSound('tick.mp3');
  }, [seconds]);

  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <App/>
), document.querySelector('#root'));


//y4.2


function Time() {
  const [hours, setHours] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [seconds, setSeconds] = React.useState();
  const [milliseconds, setMilliseconds] = React.useState();

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    if (typeof hours === 'number' && typeof minutes === 'number') {
      alert(`${hours}:${minutes}`);
    }
  }, [hours,minutes]);

  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <Time/>
), document.querySelector('#root'));


//y4.3 

function playSound(fileName) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function App() {
  const [isTimeShown, setIsTimeShown] = React.useState();

  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        Включить время (осторожно, звук!)
      </label>
      {isTimeShown && <Time/>}
    </>
  );
}

function Time() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [milliseconds, setMilliseconds] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    playSound('tick.mp3');
  }, [seconds]);
  
  React.useEffect(() => {
    playSound('gong.mp3');
  }, []);

  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <App/>
), document.querySelector('#root'));


//y4.4 

function playSound(fileName) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function App() {
  const [isTimeShown, setIsTimeShown] = React.useState();

  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        Включить время (осторожно, звук!)
      </label>
      {isTimeShown && <Time/>}
    </>
  );
}

function Time() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [milliseconds, setMilliseconds] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    playSound('tick.mp3');
  }, [seconds]);

  React.useEffect(() => {
    playSound('gong.mp3');
    return() => {playSound('gong.mp3')}
  }, []);

  
    
  
  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <App/>
), document.querySelector('#root'));


// подготовка к собеседованию Все о this

//y2.1 

'use strict';

const data = 'Hello world!';
console.log(data);


//y2.2 


function vote(voteFor) {
  'use strict'
  arguments[0] = 'Другая политическая партия';
  console.log(voteFor);
}

vote('Одна политическая партия'); // "Другая политическая партия"


//y3.1 
const methods = {
  consoleDog: function () {
    console.log(this.dog);
  },
  consoleCat: function () {
    console.log(this.cat);
  },
};

const obj1 = Object.create(methods);

obj1.dog = 'Маламут';
obj1.cat = 'Русская голубая';

obj1.consoleDog(); // "Маламут"
obj1.consoleCat(); // "Русская голубая"

const obj2 = Object.create(methods);

obj2.dog = 'Борзая';
obj2.cat = 'Британская короткошерстная';

obj2.consoleDog(); // "Борзая"
obj2.consoleCat(); // "Британская короткошерстная"


//y3.2 
const sendButton = {
  message: 'Меня нажали',
  click: function () {
    console.log(this.message);
  }
};

const button = document.querySelector('.btn');

button.addEventListener('click', function () {
  sendButton.click();
}); 

//y4 

const dataForSum = {
  firstArgument: 10,
  secondArgument: 44
};

const dataForMultiply = {
  firstArgument: 10,
  secondArgument: 44
};

const functions = {
  sum() {
    return this.firstArgument + this.secondArgument;
  },
  multiply() {
    return this.firstArgument * this.secondArgument;
  }
};

// измените вызовы внутри console.log
console.log(functions.sum.call(dataForSum));
console.log(functions.multiply.call(dataForMultiply));


//y5 

function Animal(type, phrase) {
    this.type = type
    this.phrase = phrase
}

Animal.prototype.say = function () {
  console.log(`${this.type} says ${this.phrase}`);
}; 

const fox = new Animal('fox', 'woopwoopwoop');
const tRex = new Animal('T-rex', 'ЯAWR');

fox.say(); // fox says woopwoopwoop
tRex.say(); // T-rex says ЯAWR


//y6

function Button(buttonElement, message) {
  this.element = buttonElement;
  this.message = message;
  this.click = () => {
    console.log(this.message);
  };
}

const button = new Button(document.querySelector('.btn'), 'Меня нажали');

button.element.addEventListener('click', button.click);
