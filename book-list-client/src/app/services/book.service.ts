import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BookType } from "../book-list/book.type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7095';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookType[]> {
    return this.http.get<BookType[]>(this.apiUrl);
  }
}
