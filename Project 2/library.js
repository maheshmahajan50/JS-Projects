console.log(`Welcome to Mahajan's library`);

// Book Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Methods in the prototype of Display
Display.prototype.add = function (book) {
    console.log('Adding');
    let tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Clearing the form
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// validating the form
Display.prototype.validate = function (book) {
    if (book.name.length > 2 && book.author.length > 2) {
        return true;
    }
    else {
        return false;
    }
}

// Showing message for the form
Display.prototype.show = function (type, msg) {
    msgElement = document.getElementById('message');
    msgElement.innerHTML += `<div class="alert alert-${type}                    alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${msg}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    setTimeout(function () {
        msgElement.innerHTML = '';
    }, 4000);
}

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
    console.log(book);
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
