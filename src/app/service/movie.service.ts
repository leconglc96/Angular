import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    new Movie(1, 'The Men', 'https://www.youtube.com/watch?v=B0n8LZ8fW4U', 'The Men'),
    new Movie(2, 'Nghiep UIT', 'https://www.youtube.com/watch?v=ZBHjXFDAVuc&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=32', 'Nghiep UIT')
  ];
  id;

  constructor() { }
  getAllMovie() {
    return this.movies;
  }
  addMovie(movie: Movie) {
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie);
  }
  getLastId(movies) {
    this.id = movies.length > 0 ? movies.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    })[0].id + 1 : 1;
    return this.id;
  }

}
