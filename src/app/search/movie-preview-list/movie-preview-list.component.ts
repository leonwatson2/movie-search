import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../movie.service'

import { Movie } from '../../movie'
@Component({
  selector: 'movie-preview-list',
  templateUrl: './movie-preview-list.component.html',
  styleUrls: ['./movie-preview-list.component.css']
})
export class MoviePreviewListComponent implements OnInit {
  @Input() movies:Movie[] 
  @Output() movieSelected = new EventEmitter<Movie>()
  constructor(private movieService:MovieService) {  }

  ngOnInit() {
  }

  handleClick(movie:Movie){
    this.movieService.changeSelectedMovie(movie)
  }
  
}
