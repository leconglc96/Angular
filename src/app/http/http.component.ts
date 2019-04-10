import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todos.class';

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {

    userId;
    id;
    title;
    newAlbum;
    public subscription: Subscription;
    public albums;
    constructor(
        public httpService: HttpService
    ) { }

    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.subscription = this.httpService.getAllTodos().subscribe(data => {
            this.albums = data;
        }, error => {
            this.httpService.hanldError(error);
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    addAlbum(userId, title) {
        if ( userId == null || title == null) {
            alert('Please input full data');
        } else {
            this.newAlbum = new Todo(userId, null, title);
            this.subscription = this.httpService.add(this.newAlbum).subscribe(data => {
                this.albums.push(data);
            }, error => {
                this.httpService.hanldError(error);
            });
            this.userId = null;
            this.title = null;
        }
    }
}
