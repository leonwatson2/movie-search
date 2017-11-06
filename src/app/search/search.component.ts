import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { data } from './mock-data'

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private search$:Subject<string> = new Subject<string>()
  private searchResults:Movie[] = []
  private fetching:boolean = false;
  private search:string = ""
  constructor(private movieService:MovieService) {  }

  ngOnInit(){

    this.search$.map((query)=> {this.fetching = true; return query})
                  .debounceTime(500)
                  .subscribe(this.handleChange.bind(this))
  }
 
  handleChange(val:string){
    if(val.length === 0){
      this.searchResults = []
      this.fetching = false      
    }else{
      this.movieService.searchMovie(val)
                      .subscribe((searchResults:Movie[]) => { 
                        this.fetching = false
                        if(searchResults)
                          this.searchResults = searchResults
                      })
    }
  }

  handleClick(movie:Movie){
    this.movieService.changeSelectedMovie(movie)
  }
 
}
