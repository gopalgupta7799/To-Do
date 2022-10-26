import './ToDos.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllToDos } from '../redux/actions';
import ToDo from './ToDo';
import { ACTIVE, ALL, DONE } from '../redux/actions/type';

export default function ToDos() {
  const dispatch = useDispatch();
  const todoItems = useSelector(state => state.todo);
  const tab = useSelector(state => state.tab);
  useEffect(() => {
    dispatch(getAllToDos());
  }, [])
  let count = 0;
  return (
    <div className='ToDoBox'>
      <div className="items">
        {
          todoItems.filter(item => {
            if (tab === ALL)
              return true;
            else if (tab === ACTIVE)
              return item.done === false;
            else if (tab === DONE)
              return item.done === true;
          })
            .map(item => {
              count++;
              return <ToDo key={item._id} item={item} />
            })
        }
        {
          count === 0 ? <div>No {tab} To-Do</div> : null
        }
        <hr className="end"></hr>
      </div>
    </div>
  )
}
