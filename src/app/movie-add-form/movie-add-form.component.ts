import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import {Movie} from '../models/movie.class';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.scss']
})
export class MovieAddFormComponent implements OnInit {

  newMovie;
  name;
  link;
  author;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  addItem(name, link, author) {
    if (name == null || link == null || author == null) {
      alert('Please input full data');
    } else {
      this.newMovie = new Movie(null, name, link, author);
      this.movieService.addMovie(this.newMovie);
      this.name = '';
      this.link = '';
      this.author = '';
    }
  }

}
