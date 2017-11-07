import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from './Movie'

@Injectable()
export class MovieService {
  private baseApiUrl:string = "http://api.themoviedb.org/3/search/movie"
  private configurationUrl:string = "https://api.themoviedb.org/3/configuration"
  private apiKey:string = "0ae57aa38ff0e4c5116feb88b8f6ee8"
  private imageBaseUrl:string = ""
  private selectedMovie:Subject<Movie> = new Subject<Movie>()
  private imageSizes:{backdrop?:string[], poster?:string[]} = {}
  
  constructor(private http:HttpClient) { 
    this.setImageConfiguration()
  }
  
  changeSelectedMovie(movie:Movie){
    this.selectedMovie.next(movie)
  }
  get currentMovie(){
    return this.selectedMovie
  }

  
  searchMovie(query:string){
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query)
    return this.http.get<any>(`${this.baseApiUrl}`, { params })
                    .map(res => res.results)
  }
 
  paramsWithApiKey(otherParams:Object = {}){
    let params:HttpParams = new HttpParams().set('api_key', this.apiKey)

    const keys = Object.keys(otherParams)
    keys.forEach( k =>{
      params = params.set(k, otherParams[k])
    })
    return params
  }

  setImageConfiguration(){
    
    const params = this.paramsWithApiKey()
    this.http.get<any>(`${this.configurationUrl}`, { params })
                    .map(res=>res)
                    .subscribe(config=>{
                      this.imageBaseUrl = config.images.base_url
                      this.imageSizes = {
                        backdrop:config.images.backdrop_sizes,
                        poster:config.images.poster_sizes
                      }
                    })
  }

  createBackdropUrl(backdropPath:string, size:string = ""){
    if(!backdropPath){
      return ""
    }
    return `${this.imageBaseUrl}${this.imageSizes.backdrop[0]}${backdropPath}`
  }

  createPosterUrl(posterPath:string, size:string = ""){
    if(!posterPath){
      return ""
    }
    return `${this.imageBaseUrl}${this.imageSizes.poster[this.imageSizes.poster.length - 1]}${posterPath}`

  }


  
}
