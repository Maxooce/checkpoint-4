import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public artists;
  public shows;
  public map: any = { lat: 51.678418, lng: 7.809007 };

  constructor(private _apiService: ApiServiceService) { }

  ngOnInit() {
    this.getArtists();
    this.getShows()
}
  
getArtists() {
     this._apiService.getArtists().subscribe(
        data => { this.artists = data},
        err => console.error(err),
        () => console.log('done loading artists')
      );
    }

    getShows() {
      this._apiService.getShowsSoon().subscribe(
         data => { this.shows = data},
         err => console.error(err),
         () => console.log('done loading shows')
       );
     }


}
