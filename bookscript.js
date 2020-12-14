// BookManager class
class BookManager {
  constructor(currentId = 0) {
    // constructor with a paramater currentId set to 0
    this.books = []; // initialize an array books
    this.currentId = currentId; // set the value of currentId
  }

  // function addBook
  addBook(name, genre, author, img = "") {
    const newbook = {
      // object book consists of properties id, name,genre,author, img
      id: this.currentId++,
      name: name,
      genre: genre,
      author: author,
      img: img
    };

    this.books.push(newbook); // push the newly created book to the books array
  }

  // function to display the book on the browser
  displayBook() {
    const booksHtmlList = []; // initialize an array booksHtmlList

    for (let i = 0; i < this.books.length; i++) {
      // for loop loops through books array objects

      // Pass the book id as a parameter
      const bookHtml = createBookHtml(
        // call the function expression creatBookHtml with parameters
        this.books[i].id,
        this.books[i].name,
        this.books[i].genre,
        this.books[i].author,
        this.books[i].img
      );

      booksHtmlList.push(bookHtml); // push the new book values to booksHtmlList
    }

    //const booksHtml = booksHtmlList;

    const bookListDiv = document.querySelector("#bookListDiv");
    bookListDiv.innerHTML = booksHtmlList;
  }
}

//function expression to return the HTML code of a book div display
const createBookHtml = (id, name, genre, author, img) => {
  return `<div class="book col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header">
                                Genre: ${genre}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${name} - by ${author}</h5>
                                <p class="card-text"><img src="./images/${img}"></p>
                            </div>
                        </div>
                    </div>`;
};

//outside the class, create an instance of BookManager
const bookList = new BookManager();

bookList.addBook("The Alchemist", "Life", "Paulo Coelho", "alchemist.jpg");
bookList.addBook("Time to Play", "Children's Book", "Bluey", "bluey.jpg");

// Call the displayBook function
bookList.displayBook();
