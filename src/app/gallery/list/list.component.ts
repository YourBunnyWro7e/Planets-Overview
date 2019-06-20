import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {Planet} from './Planet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  styles: [
      `.showInfo {
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 2;
      margin-top: 0;
      width: 100vw;
      align-items: center;
      transition: 1.5s;
    }
    .hideInfo {
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 2;
      margin-top: -200vh;
      width: 100vw;
      align-items: center;
      transition: 2s;
    }
    `]
})

export class ListComponent implements OnInit {
  links = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  Image: string;
  href: string;
  hovered = false;
  planetInfo: Planet[] = [];

  constructor(private httpService: HttpService) {
  }


  over(name: string, event: any) {
    this.Image = '../../../assets/' + name + '.png';
    this.href = 'https://images-api.nasa.gov/album/' + name;
    this.httpService.getSpecificData(this.href).subscribe((data) => {
      this.planetInfo = data['collection'];
    });
    this.hovered = true;

    event.target.onmouseout = () => {
      this.hovered = false;
    };
  }

  ngOnInit() {
    this.httpService.getSpecificData('https://images-api.nasa.gov/album/Earth').subscribe((data) => {
      this.planetInfo = data['collection'];
    });
  }
}

