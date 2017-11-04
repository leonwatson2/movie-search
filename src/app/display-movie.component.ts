import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie'

import { MovieService } from './movie.service'
@Component({
  selector: 'display-movie',
  template: `
  <div class="col m7 s12">
    <h3 class="fade-in-right">{{movie.title}}</h3>
    <div class="row">
      <div class="tagline col m3 fade-in-right slower">{{ movie.release_date }}</div>
    </div>
    <div class="row">
      <p class="flow-text col s12 fade-in-left slow">{{ movie.overview }}</p>
    </div>
  </div>
  <div class="col m5">
    <img class="movie-poster fade-in-left" [src]="movieService.createPosterUrl(movie.poster_path)" alt="">
  </div> 
  `,
  styles: []
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie:Movie
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

}
