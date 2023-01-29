import { removeBook } from './idb.js';

export const createCardComponent = (book) => {
  const { title, author, pages, readed } = book;

  const divBookComponent = document.createElement('div');
  const cardComponent = `
  <h2 class="title title--emph">${title}</h2>

  <div class="book__info">
    <span class="book__author-info">
      <p class="txt txt--light">Author: <span class="txt txt--emph">${author}</span> </p>
    </span>
    <span class="book__pages-info">
      <p class="txt txt--light">Pages: <span class="txt txt--emph">${pages}</span> </p>
    </span>
    <span class="book__readed-info">
      <p class="txt txt--light">Did you readed it?: <span class="txt txt--emph">${readed}</span> </p>
    </span>

    <button style="font-size: 14px;" class="btn btn--card material-symbols-outlined" data-action="delete" data-book-owner="${title}"> close </button>
  </div>
  `;

  divBookComponent.classList.add('book');
  divBookComponent.id = `${title}`;
  divBookComponent.innerHTML = cardComponent;

  return divBookComponent;
};

export const renderSingleCardComponent = (book) => {
  const cardComponent = createCardComponent(book);
  const bookList = document.getElementById('book-list');
  bookList.appendChild(cardComponent);
};
export const renderCardComponents = (books) => {
  const bookList = document.getElementById('book-list');
  const fragment = document.createDocumentFragment();

  for (const book of books) {
    const bookComponent = createCardComponent(book);
    fragment.appendChild(bookComponent);
  }

  bookList.appendChild(fragment);

  // bookList.appendChild(divBookComponent);
};

export const removeCardComponent = (e) => {
  if (!e.target.dataset.action) return;

  const bookOwner = e.target.dataset.bookOwner;
  const bookToDelete = document.getElementById(`${bookOwner}`);

  removeBook(bookOwner);
  bookToDelete.remove();
};
