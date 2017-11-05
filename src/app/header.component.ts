import { Component } from '@angular/core'
import { MovieService } from './movie.service'
@Component({
    selector:"app-header",
    template:`
    <header>
        <div class="row">
            <div class="col s4 offset-s4 search-btn center-align" (click)="startNewSearch()">
                <span class="material-icons">search</span>
            </div>
        </div>
    </header> `
})

export class HeaderComponent{
    constructor(private movieService:MovieService){
    }
      startNewSearch(){
        this.movieService.changeSelectedMovie(null)
      }
}