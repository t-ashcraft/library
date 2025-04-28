const myLibrary = [];

function Book(id, title, author, numpages) {
  if (!new.target) {throw Error("use new");};
  this.id = id;
  this.title = title;
  this.author = author;
  this.numpages = numpages;
  this.read = false;
  this.info = function() {
    if (read) {
        return `${title} by ${author} is ${numpages} pages and has been read`
    } else {
        return `${title} by ${author} is ${numpages} pages and has not been read`
    }
  }
  this.toggleRead = function() {
    this.read = (this.read)?false:true;
  }
}

function addBookToLibrary(title, author, numpages) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, numpages);
    myLibrary[myLibrary.length] = book;
}



