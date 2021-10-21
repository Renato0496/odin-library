let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (this.read === 'yes') {
            message = 'read.';
        } else {
            message = 'not read yet.';
        }
        return '' + title + ' by ' + author + ', ' + pages + ' pages, ' + message;
    };
};

function addBookToLibrary(){
    
}

// Modal

let modal = document.getElementById('myFirstModal');
let openModBut = document.getElementById('openModal');
let closeMod = document.getElementsByClassName('close')[0];

openModBut.onclick = () => {
    modal.style.display = 'block';
};

closeMod.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};