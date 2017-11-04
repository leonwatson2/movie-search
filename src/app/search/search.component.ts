import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private searchObs:Observable<string>
  private searchObserver:Observer<string>
  private searchResults:Movie[] = []
  private search:string = ""
  private fetching:boolean = false;
  constructor(private movieService:MovieService) {  }

  ngOnInit() {
    this.searchObs = Observable.create((observer)=>{
                        this.searchObserver = observer
                      })
                      .map(val=>{
                        this.fetching = true
                        return val
                      })
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
 
}
