// let books = [];
// let id = 0;

// const getBooks = (req, res, next) => {
//   if (!books.length) {
//     res.status(200).send({ message: 'No Books Available' });
//   }
//   else {
//     res.status(200).send(books);
//   }
// };

// const addBook = (req, res, next) => {
//   if (!req.body.title || !req.body.author) {
//     res.status(500).send({ message: 'Malformed Request' });
//   }
//   else {
//     // const book = {
//     //   title: req.body.title,
//     //   author: req.body.author,
//     //   id: id
//     // };

//     const book = {
//       ...req.body,
//       id
//     };

//     books.push(book);
//     id++;
//     res.status(200).send(books);
//   }
// };

// const deleteBook = (req, res, next) => {
//   if (!books.length) {
//     res.status(500).send({ message: 'No Books Available' });
//   }
//   else {
//     books = books.filter(val => val.id !== parseInt(req.params.id));
//     res.status(200).send(books);
//   }
// };

// module.exports = {
//   // V getBooks: getBooks V (both do the same thing)
//   getBooks,
//   // V addBook: addBook V (both do the same thing)
//   addBook,
//   deleteBook
// };

// books is given an array of objects that have an id, title, and author property
let books = [];
let id = 0;

const read = (req, res) => {
  res.status(200).send(books);
};

const create = (req, res) => {
  const { title, author } = req.body;
  let book = {
    id: id,
    title: title,
    author: author
  };
  books.push(book);
  id++;
  res.status(200).send(books);
};

const update = (req, res) => {
  let index = null;
  books.forEach((book, i) => {
    if (book.id === Number(req.params.id)) {
      index = i;
    }
  });
  books[index] = {
    id: books[index].id,
    title: req.body.title || books[index].title,
    author: req.body.author || books[index].author
  };
  res.status(200).send(books);
};

const deletes = (req, res) => {
  let index = null;
  books.forEach((book, i) => {
    if (book.id === Number(req.params.id)) {
      index = i;
    }
  });
  books.splice(index, 1);
  res.status(200).send(books);
}

module.exports = {
  read,
  create,
  update,
  deletes
};