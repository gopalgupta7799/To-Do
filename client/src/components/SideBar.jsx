import './SideBar.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIVE, ALL, DONE } from '../redux/actions/type';
import { changeTab } from '../redux/actions';

export default function SideBar() {
  const dispatch = useDispatch();

  const changeActive = (e) => {
    const currentActive = document.getElementsByClassName('active')[0];
    currentActive.classList.remove('active');
    e.target.classList.add('active');
  }
  return (
    <aside id="side-bar">
      <div className='side-items active' onClick={(e) => {
        changeActive(e);
        dispatch(changeTab(ALL));
      }}>
        All
      </div>
      <div className='side-items' onClick={(e) => {
        changeActive(e);
        dispatch(changeTab(ACTIVE));
      }}>
        Active
      </div>
      <div className='side-items' onClick={(e) => {
        changeActive(e);
        dispatch(changeTab(DONE));
      }}>
        Done
      </div>
    </aside>
  )
}
