const myLibrary = [];

const bookList = document.querySelector("#booklist");

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



function displayBooks() {
    myLibrary.forEach(book => {
        let bookDisplay = document.createElement("div");
        bookDisplay.classList.add("bookDisplay");

        let bookTitle = document.createElement("div");
        bookTitle.classList.add("title");
        bookTitle.textContent = book.title;
        bookDisplay.appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.classList.add("author");
        bookAuthor.textContent = book.author;
        bookDisplay.appendChild(bookAuthor);

        let bookPages = document.createElement("div");
        bookPages.classList.add("pages");
        bookPages.textContent = `${book.numpages} pages`;
        bookDisplay.appendChild(bookPages);

        let readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.textContent = "Hasn't Read";
        readButton.classList.add("hasnotread");
        readButton.addEventListener("click", function (e) {
            book.toggleRead();
            if (book.read) {
                readButton.textContent = "Has Read";
                readButton.classList.remove("hasnotread");
                readButton.classList.add("hasread");
            } else {
                readButton.textContent = "Hasn't Read";
                readButton.classList.remove("hasread");
                readButton.classList.add("hasnotread");
            }
        });
        bookDisplay.appendChild(readButton);

        bookList.appendChild(bookDisplay);
    });
}

function addDummyBooks() {
    addBookToLibrary("ben ten 1", "benith tenith", 50);
    addBookToLibrary("ben ten 2", "benith tenith", 50);
    addBookToLibrary("ben ten 3", "benith tenith", 50);
    addBookToLibrary("ben ten 4", "benith tenith", 50);
    addBookToLibrary("ben ten 5", "benith tenith", 50);
    addBookToLibrary("ben ten 6", "benith tenith", 50);
    addBookToLibrary("ben ten 6", "benith tenith", 50);
    addBookToLibrary("ben ten 6", "benith tenith", 50);
    addBookToLibrary("ben ten 6", "benith tenith", 50);
    displayBooks();
}
addDummyBooks()



