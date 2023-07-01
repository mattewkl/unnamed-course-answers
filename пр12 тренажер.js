// 5.1. 
// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className="content">
          <NavBar />
          <Routes>
            <Route path="/" element={this.state.loggedIn ? <Navigate to="/diary" replace /> : <Navigate to="/login" replace />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

// 5.2.
// App.js

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className="content">
          <NavBar />
          <Routes>
            <Route path="/" element={this.state.loggedIn && <NavBar /> ? <Navigate to="/diary" replace /> : <Navigate to="/login" replace />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

// 6.1
// ProtectedRoute.js
import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace />
  )
}

export default ProtectedRouteElement;

// App.js
import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace />
  )
}

export default ProtectedRouteElement;

// 7.1
// auth.js

export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

// Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../auth.js';
import './styles/Register.css';
import * as auth from '../auth.js';

const Register = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    calGoal: ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password === formValue.confirmPassword) {
      const { username, password, email } = formValue;
      auth.register(username, password, email);
    }
  }

  return (
    <div className="register">
      <p className="register__welcome">
        Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">
          Логин:
        </label>
        <input id="username" name="username" type="text" value={formValue.username} onChange={handleChange} />
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
        <label htmlFor="confirmPassword">
          Повторите пароль:
        </label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formValue.confirmPassword} onChange={handleChange} />
        <label htmlFor="calGoal">
          Калории за день:
        </label>
        <input id="calGoal" name="calGoal" type="number" value={formValue.calGoal} onChange={handleChange} />
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;

// 7.2
// Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../auth.js';
import './styles/Register.css';

const Register = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    calGoal: ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password === formValue.confirmPassword) {
      const { username, password, email } = formValue;
      auth.register(username, password, email).then((res) => {
        navigate('/login', { replace: true });
      }
      );
    }
  }

  return (
    <div className="register">
      <p className="register__welcome">
        Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">
          Логин:
        </label>
        <input id="username" name="username" type="text" value={formValue.username} onChange={handleChange} />
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
        <label htmlFor="confirmPassword">
          Повторите пароль:
        </label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formValue.confirmPassword} onChange={handleChange} />
        <label htmlFor="calGoal">
          Калории за день:
        </label>
        <input id="calGoal" name="calGoal" type="number" value={formValue.calGoal} onChange={handleChange} />
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;

// 9.1

// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../auth.js';
import './styles/Login.css';

const Login = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.username || !formValue.password) {
      return;
    }
    auth.authorize(formValue.username, formValue.password)
      .then((data) => {
        // нужно проверить, есть ли у данных jwt
        // сбросьте стейт, затем в колбэке установите
        // стейт loggedIn родительского App как true,
        // затем перенаправьте его в /diary
        if (data.jwt) {
          setFormValue({ username: '', password: '' });
          handleLogin();
          navigate('/diary', { replace: true });
        }

      })
      .catch(err => console.log(err));
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Добро пожаловать!
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="username">
          Логин:
        </label>
        <input required id="username" name="username" type="text" value={formValue.username} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/register" className="signup__link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login;

// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import * as auth from '../auth.js';
import './styles/App.css';
import ProtectedRouteElement from "./ProtectedRoute";

const App = () => {
  const [loggedIn, setLoggedIn] = useState();

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/diary" replace /> : <Navigate to="/login" replace />} />
          <Route path="/diary" element={<ProtectedRouteElement element={Diary} loggedIn={loggedIn} />} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips} loggedIn={loggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

// 10.1
// auth.js
export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ identifier, password })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data.user) {
        localStorage.setItem('jwt', data.jwt);
        return data;
      }
    })
    .catch(err => console.log(err))
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}

// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import * as auth from '../auth.js';
import './styles/App.css';
import ProtectedRouteElement from "./ProtectedRoute";

const App = () => {
  const [loggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // проверьте токен здесь
    handleTokenCheck();
  }, [])

  const handleTokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // проверим токен
      auth.checkToken(jwt).then((res) => {
        if (res) {
          // авторизуем пользователя
          setLoggedIn(true);
          navigate("/diary", { replace: true })
        }
      });
    }
  }

  const handleLogin = () => {
    setLoggedIn(true);
  }
  return (
    <>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/diary" replace /> : <Navigate to="/login" replace />} />
          <Route path="/diary" element={<ProtectedRouteElement element={Diary} loggedIn={loggedIn} />} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips} loggedIn={loggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// 10.2

// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import * as auth from '../auth.js';
import * as calData from '../data';
import './styles/App.css';
import ProtectedRouteElement from "./ProtectedRoute";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [calGoal, setCalGoal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, [])

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt).then((res) => {
        let calGoal = 0;
        // найдём выбранное пользователем количество калорий
        // из списка возможных целей
        calData.calData.forEach((goal) => {
          if (goal.id === res.ru_cal_goal) {
            // цель, выбранная пользователем
            calGoal = goal.calGoal;
          }
        })
        if (res) {
          setLoggedIn(true);
          setCalGoal(calGoal);
          navigate("/diary", { replace: true })
        }
      });
    }
  }
  const handleLogin = () => {
    setLoggedIn(true);
  }
  return (
    <>
      <Header />
      <main className="content">
        {loggedIn && <NavBar />}
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/diary" replace /> : <Navigate to="/login" replace />} />
          <Route path="/diary" element={<ProtectedRouteElement element={Diary} calGoal={calGoal} loggedIn={loggedIn} />} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips} loggedIn={loggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// Diary.js

import React from 'react';
import FoodAdder from './FoodAdder';
import './styles/Diary.css';

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
      calorieTotal: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (food, calories) => {
    let calorieTotal = 0;
    var newList = this.state.foodList.slice();
    newList.push({ food, calories });
    // получаем сумму калорий
    newList.forEach((entry) => {
      calorieTotal = calorieTotal + parseInt(entry.calories);
    });
    this.setState({
      foodList: newList,
      calorieTotal
    });
  }
  render() {
    return (
      <div className="diary">
        <div className="calories">
          <h2>Цель на день: {this.props.calGoal}</h2>
          <h2>Калории: {this.state.calorieTotal}</h2>
          <ul className="calories__list">
            {this.state.foodList.map((food, i) => {
              return (
                <li key={i} >{food.food} - {food.calories}</li>
              )
            })}
          </ul>
        </div>
        <FoodAdder handleSubmit={this.handleSubmit} />
      </div>
    );
  }

}

export default Diary;

