import { Component, OnInit } from '@angular/core';
// Service
import { MovieService } from '../service/movie.service';
import { Movie } from '../models/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  name;
  link;
  author;
  in; // index phan tu trong array movies
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getAllMovie();
  }
  removeMovie(id) {
    const check = confirm('Delete Item ?');
    if (check) {
      const index = this.movies.findIndex(movie => movie.id === id);
      this.movies.splice(index, 1);
    }
  }
  editMovie(id, name, link, author) {
    this.in = this.movies.findIndex(movie => movie.id === id);
    this.name = name;
    this.link = link;
    this.author = author;
  }
  update(name, link, author) {
    this.movies[this.in].name = name;
    this.movies[this.in].link = link;
    this.movies[this.in].author = author;
  }

}
