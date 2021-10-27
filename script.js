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

addBut.onclick = function () {
    addBookToLibrary();
    displayTable();
};

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
    let addTitle = document.getElementsByClassName('textInput')[0];
    let addAuthor = document.getElementsByClassName('textInput')[1];
    let addPages = document.getElementsByClassName('textInput')[2];
    let readen = document.getElementById('readOrNot').checked;
    if (addTitle.value === '' || addAuthor.value === '' || addPages.value === '') {
        return;
    } else {
        myLibrary.push(new Book(addTitle.value, addAuthor.value, addPages.value, readen));
        modal.style.display = 'none';
    };
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
};

// display library

let libTable = document.querySelector('.container');

function displayTable() {

    while (libTable.rows.length > 1) {
        libTable.removeChild(libTable.lastChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {

        const tr = document.createElement('tr');
        tr.classList.add('libraryRows');
        tr.id = `row${i+1}`;

        const tdTitle = document.createElement('td');
        tdTitle.textContent = `${myLibrary[i].title}`;
        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = `${myLibrary[i].author}`;
        const tdPages = document.createElement('td');
        tdPages.textContent = `${myLibrary[i].pages}`;
        const tdRead = document.createElement('td');
        tdRead.classList.add('status');
        tdRead.textContent = `${myLibrary[i].read}`;
        const tdDelete = document.createElement('td');
        let delSpan = document.createElement('span');
        delSpan.innerHTML = 'delete';
        delSpan.classList.add('material-icons-outlined');
        delSpan.classList.add('deleteIcon');
        tdDelete.appendChild(delSpan);

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tr.appendChild(tdDelete);

        libTable.appendChild(tr);
    };
    howToDelete();
    maybeRead();
}

// delete book

const howToDelete = function () {

    let deleteBut = document.getElementsByClassName('deleteIcon');

    for (let i = 0; i < deleteBut.length; i++) {
        deleteBut[i].onclick = function () {
            console.log('te amo');
            myLibrary.splice(i, 1);
            displayTable();
        }
    };
};

const maybeRead = function () {

    let readStatus = document.getElementsByClassName('status');

    for (let i = 0; i < readStatus.length; i++) {
        readStatus[i].onclick = function () {
            if (readStatus[i].textContent === 'true') {
                readStatus[i].textContent = 'false';
            } else if (readStatus[i].textContent === 'false') {
                readStatus[i].textContent = 'true';
            };
        }
    };
};