import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieappService {

  movieGenre : any;

  constructor(private http: HttpClient) { }

  getGenre(): Observable<any>{

    const parameters = {

    api_key: '6a5e8e2794d9936ea3a65f37b3b40410',

    }
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list', {params: parameters})
  }
  
  getMovies(searchCrit: any){

    console.log("getMovies got called");
    console.log(searchCrit)
    const parameters = {

      api_key: '6a5e8e2794d9936ea3a65f37b3b40410',
      with_genres: searchCrit.genreId

    }

    return this.http.get('https://api.themoviedb.org/3/discover/movie', {params: parameters})
  }

  getReleaseYear(searchCrit: any){
    console.log("getRY got called");
    console.log(searchCrit);
    const parameters = {
      
      api_key: '6a5e8e2794d9936ea3a65f37b3b40410',
      primary_release_year: searchCrit.releaseYear

    }
    return this.http.get('https://api.themoviedb.org/3/discover/movie', {params: parameters})

  }
}
