console.log('This is ES6 version of Project 2');



class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let books = localStorage.getItem('books');
        let booksObj;
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }

        let myObj = {
            name: book.name,
            author: book.author,
            type: book.type
        }

        booksObj.push(myObj);
        localStorage.setItem('books', JSON.stringify(booksObj));
        showBooks();
    }

    static showBooks() {
        let books = localStorage.getItem('books');
        let booksObj;
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }

        let html = '';
        booksObj.forEach((book, index) => {
            html += `<tr class='tableRows'>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td ><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-danger">Delete Book</button></td>
                     </tr>`
        });

        let tableBody = document.getElementById('tableBody');
        if (booksObj.length != 0) {
            tableBody.innerHTML = html;
        }
        else {
            tableBody.innerHTML = `<h3>Nothing to show!!! Use "Add Book Section to Add Something"</h3>`;
        }
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length > 2 && book.author.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }

    show(type, msg) {

        let msgElement = document.getElementById('message');
        msgElement.innerHTML += `<div class="alert alert-${type}                    alert-dismissible fade show" role="alert">
                                    <strong>Message:</strong> ${msg}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
        setTimeout(function () {
            msgElement.innerHTML = '';
        }, 3000);
    }

}


Display.showBooks();

// Add eventListner for submit form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

// Submitt event for libraryForm
function libraryFormSubmit(e) {

    let bookName = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else {
        type = 'other';
    }

    let book = new Book(bookName, authorName, type);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book is successfully added');
    }
    else {
        // Show error to the user;
        display.show('danger', 'Oops! title or author name is too short');
    }


    e.preventDefault();
}

// Search feature for searching notes

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputValue = search.value.toLowerCase().trim();
    let tableRows = document.getElementsByClassName('tableRows');
    Array.from(tableRows).forEach(function (element) {
        let name = element.getElementsByTagName('td')[0].innerText.toLowerCase();
        let author = element.getElementsByTagName('td')[1].innerText.toLowerCase();
        let type = element.getElementsByTagName('td')[2].innerText.toLowerCase();
        if (name.includes(inputValue) || author.includes(inputValue) || type.includes(inputValue)) {
            element.style.display = "table-row";
        }
        else {
            element.style.display = "none";
        }
    })

})


function deleteBook(index) {
    console.log("I am deleting", index);
    let books = localStorage.getItem('books');
    let booksObj;
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }

    booksObj.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksObj));
    Display.showBooks();
    let display = new Display();
    display.show('success', 'Book deleted successfully!!');
}
