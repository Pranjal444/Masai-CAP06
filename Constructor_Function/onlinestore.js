function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;

  this.getBookInfo = function () {
    return {
      message: "Title",
      titlename: this.title,
      Authorsname: this.author.name,
      Gener: this.genre,
      Price: this.price,
    };
  };
}

function Author(name, birthYear, nationality) {
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
}

// Creating author instances
const ath1 = new Author("J.K. Rowling", 1965, "British");
const ath2 = new Author("Stephen King", 1947, "American");
const ath3 = new Author("George R.R. Martin", 1948, "American");
const ath4 = new Author("J.R.R. Tolkien", 1892, "British");

// Creating book instances
const book1 = new Book("New Title 1", ath1, "Fantasy", "₹14.99");
const book2 = new Book("New Title 2", ath1, "Fantasy", "₹12.99");
const book3 = new Book("New Title 3", ath2, "Fiction", "₹24.99");
const book4 = new Book("New Title 4", ath2, "Fiction", "₹14.99");
const book5 = new Book("New Title 5", ath3, "Thriller", "₹24.99");

// Displaying book info
console.log("A book info: ", book1.getBookInfo());
console.log("\n");

console.log("************ All book details ************");

const allBooks = [book1, book2, book3, book4, book5];

allBooks.forEach((itm) => {
  console.log(itm.getBookInfo());
  console.log("------------------------------------------");
});

console.log("\n");
console.log("************ Thank You ************");
