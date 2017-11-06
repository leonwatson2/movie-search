import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie'
import { MovieService } from '../../movie.service'
@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css'],
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie:Movie
  @Input() index:number
  private backdropUrl:string = ""
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.backdropUrl = this.movieService.createBackdropUrl(this.movie.backdrop_path)
  }
  backdropStyles = ()=>{
    return {
      'background':`linear-gradient(180deg, rgba(0,0,0,0.7), transparent),url(${this.backdropUrl})`,
      'background-size': 'cover'
    }
  }
  animationDelay = ()=>({
    'animation-delay':`${this.index*.1}s`
  })
}
