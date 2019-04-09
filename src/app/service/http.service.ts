import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todos.class';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API = 'https://jsonplaceholder.typicode.com/albums';
  constructor(
      public http: HttpClient
  ) { }

  // getAllTodos trả về kiểu Observable. Nó trả về 1 kiểu array Todo.
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }
  hanldError(err) {
    if (err.errors instanceof Error) {
      alert(`Client side error: ${err.errors.message}`);
    } else {
      alert(`Server side error: ${err.status} - ${err.errors}`);
    }
  }
  add(album: Todo): Observable<Todo[]> {
     return this.http.post<Todo[]>(this.API, album);
  }

}
