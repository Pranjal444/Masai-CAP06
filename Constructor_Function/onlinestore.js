let allAuthor = [];
let allBooks = [];

function Author(name, birthYear, nationality){
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
  allAuthor.push(this);
}

function Book(title, author, genre, price){
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  allBooks.push(this);
  this.getBookInfo = function (){
    return `Title: ${this.title},
Author Name: ${this.author.name}, 
Genre: ${this.genre}, 
Price: ${this.price}`;
  };
};




ath1 = new Author("J.K. Rowling", 1965, "British");
ath2 = new Author("Stephen King", 1947, "American");
ath3 = new Author("George R.R. Martin", 1948, "American");
ath4 = new Author("J.R.R. Tolkien", 1892, "British");

book1 = new Book("New Title 1", ath1, "Fantasy", "₹14.99");
book2 = new Book("New Title 2", ath1, "Fantasy", "₹12.99");
book3 = new Book("New Title 3", ath2, "Fiction", "₹24.99");
book4 = new Book("New Title 4", ath2, "Fiction", "₹14.99");
book5 = new Book("New Title 5", ath3, "Thriller", "₹24.99");
console.log("************ Wellcome to Bookstore ************");
console.log("Total book available: " + allBooks.length);
console.log("Total Authors:" + allAuthor.length);
console.log("\n");

console.log("A book info: " + book1.getBookInfo());
console.log("\n");


console.log("************ All book details ************");

allBooks.forEach((itm)=>{
  console.log(itm.getBookInfo());
  console.log("------------------------------------------");
});

console.log("\n");
console.log("************ Thank You ************");