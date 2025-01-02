import {Component, OnInit} from '@angular/core';
import {BookType} from "./book.type";
import {CommonModule} from "@angular/common";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: BookType[] = []

  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getBooks();
  }

  getBooks() : void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
}
