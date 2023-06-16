
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