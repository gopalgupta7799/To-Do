import './Header.css';
import React, { useEffect } from 'react';
import ToDoIcon from '../images/ToDoIcon.png';
import { Hamburger } from './Icons';

const search = (arr, str) => {

}
export default function Header() {
  return (
    <>
      <header>
        <div className="hamburger"
          onClick={() => {
            const ele = document.getElementById('side-bar');
            ele.style.transform = ele.style.transform === `translate(0px)` ? `translate(${-1 * ele.offsetWidth}px)` : `translate(0px)`;
          }}
        >
          <Hamburger />
        </div>
        <img src={ToDoIcon} alt="To-Do" />
        <h2>To-Do</h2>
        <input type="text" placeholder='Search'
          onChange={(e) => {
            search(e.target.value);
          }} />
      </header>
    </>
  );
}
