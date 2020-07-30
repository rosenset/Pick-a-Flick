import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieAppService: MovieappService) { }

  ngOnInit() {
    this.movieAppService.getPopular().subscribe(this.onSuccess.bind(this), this.onError.bind(this))
  }

  onSuccess(data:any){
    console.log(data);
  }

  onError(error: Error){
    console.log(error.message);
  }

  getMovies() {
    console.log(this.movieAppService.movies)
    return this.movieAppService.movies
  }

}
