import './Header.css';
import React from 'react';
import ToDoIcon from '../images/ToDoIcon.png';
import { Hamburger } from './Icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ToDo from './ToDo';


let num = 0;
export default function Header() {
  const todoItems = useSelector(state => state.todo);
  const [searchText, setSearchText] = useState('');
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
        <div className="searchBox">
          <input type="text" placeholder='Search' value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <div className="searched-items">
            {
              searchText.length != 0 ?
                todoItems.filter((item) => {
                  if (item.content.search(searchText) !== -1) {
                    return true
                  }
                }).map((item) => <ToDo item={item} />)
                : null
            }
          </div>
        </div>
      </header>
    </>
  );
}
