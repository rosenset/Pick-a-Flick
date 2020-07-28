import { Component } from '@angular/core';
import { MovieappService } from './movieapp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchneiderFlix';

  constructor(private movieService : MovieappService){ }

  getMovies(){
    return this.movieService.movies
  }
}
