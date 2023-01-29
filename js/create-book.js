import {
  createCardComponent,
  renderSingleCardComponent,
} from './book-component.js';
import { handleModal, resetModal } from './modal.js';
import { addBook } from './idb.js';

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

export const createBook = (e) => {
  e.preventDefault();

  // debugger;

  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookPages = document.getElementById('book-pages').value;
  const BookReaded = document.getElementById('book-readed').checked;

  const warnMessageWarn = document.getElementById('form-warn-message');

  if (bookTitle === '')
    return (warnMessageWarn.textContent = `There's no title for the book`);
  else if (bookAuthor === '')
    return (warnMessageWarn.textContent = `The book ${bookAuthor} doesn't have any author`);
  else if (bookPages === '')
    return (warnMessageWarn.textContent = `You don't specify how many pages the Book "${bookTitle}" have`);
  else {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, BookReaded);
    handleModal();
    resetModal();
    renderSingleCardComponent(newBook);
    addBook(newBook);
  }
};
