import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from './movie'

@Injectable()
export class MovieService {
  private baseApiUrl:string = "http://api.themoviedb.org/3/search/movie"
  private configurationUrl:string = "https://api.themoviedb.org/3/configuration"
  private apiKey:string = "0ae57aa38ff0e4c5116feb88b8f6ee81"
  private imageBaseUrl:string = ""
  private selectedMovie = new Subject<Movie>()
  
  constructor(private http:Http) { 
    this.getConfiguration().subscribe(c=>{
      console.log(c)
    })
  }
  
  get currentMovie(){
    return this.selectedMovie
  }

  apiQuery(query:string){
    return `?api_key=${this.apiKey}&query=${query}`
  }
  
  searchMovie(query:string){
    const search = this.paramsWithApiKey({query})
    return this.http.get(`${this.baseApiUrl}`, { search })
                    .map(res => res.json().results)
  }

  getConfiguration(){
    
    const search = this.paramsWithApiKey()

    return this.http.get(`${this.configurationUrl}`, { search })
                    .map(res=>res.json())
  }

  paramsWithApiKey(otherParams:Object = {}){
    const params:URLSearchParams = new URLSearchParams()
    params.set('api_key', this.apiKey)

    const keys = Object.keys(otherParams)
    keys.forEach( k =>{
      params.set(k, otherParams[k])
    })
    return params
  }
  changeSelectedMovie(movie:Movie){
    this.selectedMovie.next(movie)
  }
}
