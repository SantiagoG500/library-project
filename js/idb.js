import { renderCardComponents } from './book-component.js';

let db;
export const startIDB = () => {
  const indexedDB = window.indexedDB;
  if (indexedDB) {
    const request = indexedDB.open('library', 1);

    request.onsuccess = () => {
      db = request.result;
      readBook();
    };

    request.onupgradeneeded = () => {
      db = request.result;
      db.createObjectStore('books', {
        keyPath: 'title',
      });
      console.log('DB CREATE', db);
    };

    request.onerror = (err) => console.error(`DB ERROR: ${err}`);
  }
};

export const addBook = (book) => {
  const transaction = db.transaction(['books'], 'readwrite');

  transaction.onerror = (event) =>
    console.error(`Transaction failed: ${event}`);

  const objStore = transaction.objectStore('books');

  // add new book to the DB
  const request = objStore.add(book);
  request.onerror = (err) => console.error(`Request failed: ${err}`);
};

export const readBook = () => {
  const transaction = db.transaction(['books'], 'readonly');
  transaction.onerror = (err) => {
    console.error(` readBook Transaction failed: ${err}`);
  };

  const objStore = transaction.objectStore('books');
  const request = objStore.getAll();
  request.onsuccess = () => renderCardComponents(request.result);
};

export const removeBook = (key) => {
  const transaction = db.transaction(['books'], 'readwrite');
  const objStore = transaction.objectStore('books');
  const request = objStore.delete(key);

  request.onerror = (err) => {
    console.log(`removeBook error: ${err}`);
  };
};

export const getAllBooks = () => {
  const transaction = db.transaction(['books'], 'readwrite');
  const objStore = transaction.objectStore('books');
  const request = objStore.getAll(key);

  request.onsuccess = () => {
    console.log(request.result);
  };
};
