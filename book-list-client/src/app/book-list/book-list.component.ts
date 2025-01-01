import { Component } from '@angular/core';
import {BookType} from "./book.type";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
 books: BookType[] = [
   { id: 0, author: "author 1", title: "title 1" },
   { id: 1, author: "author 2", title: "title 2" },
   { id: 2, author: "author 3", title: "title 3" },
 ]
}
