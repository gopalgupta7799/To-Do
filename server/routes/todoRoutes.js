import express from 'express';
import { add, getAll, toggle, update, deleteToDo } from '../controllers/todoController.js';

const todoRoutes = express.Router();

todoRoutes.post('/add', add);
todoRoutes.get('/', getAll);
todoRoutes.get('/toggle/:id', toggle);
todoRoutes.post('/update/:id', update);
todoRoutes.delete('/delete/:id', deleteToDo);

export default todoRoutes;