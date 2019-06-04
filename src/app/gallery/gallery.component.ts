import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Planets} from './Planets';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  PlanetInfo: Planets[] = [];
  PlanetVideos: any;

  constructor(private httpService: HttpService) {
    this.httpService.getSpecificData('https://images-api.nasa.gov/album/Mars').subscribe((data) => {
      this.PlanetInfo = data['collection'];
      //console.log(data);
    });
    this.httpService.getSpecificData('https://images-assets.nasa.gov/video/GSFC_20150305_Mars_m11796_Ocean/collection.json').subscribe((data) => {
      this.PlanetVideos = data;
      //console.log(data);
    });
  }

  ngOnInit() {

  }

}
