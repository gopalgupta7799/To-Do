import './ToDo.css';
import React, { useState } from 'react';
import { CheckNotDone, CheckDone, Trash } from './Icons';
import { toggleToDo, update, deleteToDo } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function ToDo({ item }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(item.content);
  let color = item.done ? "green" : "black";
  return (
    <div className='todoItem'>
      <textarea className="content" value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={(e) => dispatch(update(item._id, e.target.value))} />
      <div className="actions">
        <span className="icon" style={{ color: color }}
          onClick={() => dispatch(toggleToDo(item._id))}
        >
          {
            !item.done ?
              <CheckNotDone />
              :
              <CheckDone />
          }
        </span>
        <span className="icon"
          onClick={() => dispatch(deleteToDo(item._id))}
        >
          <Trash />
        </span>
      </div>
    </div >
  )
}
