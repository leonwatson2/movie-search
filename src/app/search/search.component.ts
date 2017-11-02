import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private searchSubject = new Subject<string>()
  private searchResults:Movie[] = []
  
  constructor(private movieService:MovieService) {  }

  ngOnInit() {
    this.searchSubject.map(val=>val)
                      .debounceTime(500)
                      .subscribe(this.handleChange.bind(this))
  }

  ngOnDestroy(){
    this.searchSubject.unsubscribe()
  }
  
  handleChange(val:string){
    if(val.length === 0){
      this.searchResults = []
    }else{
      this.movieService.searchMovie(val)
      .subscribe( data =>{ 
        if(data)
        this.searchResults = data 
      })
    }
  }
 
}
