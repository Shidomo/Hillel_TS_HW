interface Book {
  title: string;
  author: Author;
  year: number;
}

interface Author {
  name: string;
  birthYear: number;
}

interface BookService {
  getBookInfo(bookId: number): Book;
  getAuthorInfo(authorId: number): Author;
}

class BookInfo implements Book {
  constructor(
    public title: string,
    public author: Author,
    public year: number,
  ) {}
}
class AuthorInfo implements Author {
  constructor(
    public name: string,
    public birthYear: number,
  ) {}
}
class MockBookService implements BookService {
  getBookInfo(bookId: number): Book {
    return new BookInfo("Simple Book", new AuthorInfo("John Doe", 1980), 2022);
  }

  getAuthorInfo(authorId: number): Author {
    return new AuthorInfo("John Doe", 1980);
  }
}

const bookSerivce = new MockBookService();
const bookInfo = bookSerivce.getBookInfo(1);
const authorInfo = bookSerivce.getAuthorInfo(1);
console.log(bookInfo, authorInfo);
