function Book(title,author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read === 'yes') {
            message = 'read.';
        } else {
            message = 'not read yet.';
        }
        return ''+title+' by '+author+', '+pages+' pages, '+message;
    };
}