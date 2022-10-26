import './ToDoForm.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewToDo } from '../redux/actions';

export default function ToDoForm() {

  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');

  return (
    <div id="toDoForm">
      <form autoComplete='off'>
        <textarea id="createToDo" type="text" value={newToDo} placeholder='Create New To-Do...'
          onChange={(e) => {
            setNewToDo(e.target.value);
          }}
          onBlur={(e) => {
            if (newToDo) {
              dispatch(addNewToDo(newToDo));
              setNewToDo('');
            }
          }}
        />
      </form>
    </div>
  );
}
