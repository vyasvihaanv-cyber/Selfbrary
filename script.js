class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = this.loadBooks();
    }

    loadBooks() {
        const books = localStorage.getItem('books');
        return books ? JSON.parse(books) : [];
    }

    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    addBook(book) {
        this.books.push(book);
        this.saveBooks();
    }

    editBook(index, newBook) {
        this.books[index] = newBook;
        this.saveBooks();
    }

    deleteBook(index) {
        this.books.splice(index, 1);
        this.saveBooks();
    }

    searchBooks(searchTerm) {
        return this.books.filter(book => 
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}

// Example usage:
const library = new Library();
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));
library.editBook(0, new Book('The Great Gatsby', 'Fitzgerald'));
library.deleteBook(0);
console.log(library.searchBooks('Gatsby'));