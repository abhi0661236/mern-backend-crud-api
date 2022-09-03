import express from 'express';
import {getBooks, getBook, addBook, updateBook, removeBook} from '../api/Book.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/add', addBook);
router.put('/:id', updateBook);
router.delete('/:id', removeBook);

export default router;