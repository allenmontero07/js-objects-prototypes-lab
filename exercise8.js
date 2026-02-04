const library = {
  name: "City Library",
  books: [],

  addBook(title, author, isbn) {
    const book = {
      title,
      author,
      isbn
    };

    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  listAllBooks() {
    this.books.forEach(book => {
      console.log(book.title);
    });
  },

  searchByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }
};

const universityLibrary = Object.create(library);

universityLibrary.courses = [];

universityLibrary.addCourseBook = function (course, title, author, isbn) {
  this.courses.push(course);
  this.addBook(title, author, isbn);
};

// Tests
library.addBook("JS Basics", "John Smith", "111");
library.addBook("HTML Guide", "Jane Doe", "222");
library.addBook("CSS Mastery", "John Smith", "333");

library.listAllBooks();

console.log(library.findBookByTitle("JS Basics"));

console.log(library.searchByAuthor("John Smith"));

universityLibrary.addCourseBook(
  "Web Dev",
  "React Guide",
  "Alex Lee",
  "444"
);

console.log(universityLibrary.books);
console.log(universityLibrary.courses);
