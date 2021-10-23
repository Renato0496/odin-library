// Modal

let modal = document.getElementById('myFirstModal');
let internalModal = document.getElementsByClassName('formModal')[0];
let openModBut = document.getElementById('openModal');
let closeMod = document.getElementsByClassName('close')[0];
let addBut = document.getElementsByClassName('addButton')[0];

openModBut.onclick = () => {
    modal.style.display = 'block';
};

closeMod.onclick = () => {
    modal.style.display = 'none';
};

addBut.addEventListener('click', addBookToLibrary);

// Library

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (this.read) {
            message = 'read.';
        } else {
            message = 'not read yet.';
        }
        return '' + title + ' by ' + author + ', ' + pages + ' pages, ' + message;
    };
};

function addBookToLibrary() {
    let addTitle = document.getElementsByClassName('textInput')[0].value;
    let addAuthor = document.getElementsByClassName('textInput')[1].value;
    let addPages = document.getElementsByClassName('textInput')[2].value;
    let readen = document.getElementById('readOrNot').checked;
    if (addTitle === '' || addAuthor === '' || addPages === '') {
        return;
    } else {
        myLibrary.push(new Book(addTitle, addAuthor, addPages, readen));
        modal.style.display = 'none';
    }
};

// display library

