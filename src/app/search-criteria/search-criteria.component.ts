import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  genres : any;


  constructor(private movieAppService: MovieappService) { }

  ngOnInit(): any {

    
    this.movieAppService.getGenre().subscribe(this.onSuccess.bind(this), this.onError.bind(this))
  }

  onSuccess(data:any){
    this.genres = data.genres;
    console.log(data.genres);
  }

  onError(error: Error){
    console.log(error.message);
  }
  searchSubmit(data){
    console.log("searchSubmit method got called")
    console.log(data);
    this.movieAppService.getMovies(data).subscribe(response => console.log(response))
  }
}
