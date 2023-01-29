import { createBook } from './js/create-book.js';
import { handleModal } from './js/modal.js';
import { startIDB } from './js/idb.js';
import { removeCardComponent } from './js/book-component.js';

const enableModalBtn = document.getElementById('enable-modal');
const disableModalBtn = document.getElementById('close-modal');
const addBookBtn = document.getElementById('add-book');
const bookList = document.getElementById('book-list');

startIDB();

addBookBtn.addEventListener('click', createBook);
enableModalBtn.addEventListener('click', handleModal);
disableModalBtn.addEventListener('click', handleModal);
bookList.addEventListener('click', removeCardComponent);
