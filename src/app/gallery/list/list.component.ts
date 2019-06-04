import {Component, OnInit, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
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

export class ListComponent implements OnInit, AfterViewInit {
  links = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  Image: string;
  href: string;
  hovered = false;
  planetInfo: Planet[] = [];

  @ViewChildren('planets') myPlanet: QueryList<any>;

  constructor(private httpService: HttpService) {
  }

  movePlanet = (planet, left, top) => {
    if (left < 150) {
      left = 150;
    }
    if (left > window.innerWidth - 150) {
      left = window.innerWidth - 150;
    }
    if (top < 150) {
      top = 150;
    }
    if (top > window.innerHeight - 150) {
      top = window.innerHeight - 150;
    }
    planet.style.transition = '3s top, 3s left';
    planet.style.left = left + 'px';
    planet.style.top = top + 'px';
  };

  setPlanet = (planet, currentLeft, currentTop) => {
    document.getElementById('Wrapper').appendChild(planet);
    planet.style.left = currentLeft + 'px';
    planet.style.top = currentTop + 'px';
    planet.style.animation = 'spin 6s';
    planet.style.animationIterationCount = '1';
    planet.style.animationFillMode = 'forwards';
    setTimeout(() =>   planet.style.removeProperty( 'animation'), 6000);
    setTimeout(() =>
      this.movePlanet(planet, window.innerWidth / 2, window.innerHeight / 2), 50);
  };

  over(name: string, event: any, ind: number) {
    const planet = document.getElementById('planet' + ind);
    const currentLeft = planet.getBoundingClientRect().left;
    const currentTop = planet.getBoundingClientRect().top;

    this.Image = '../../../assets/' + name + '.png';
    this.href = 'https://images-api.nasa.gov/album/' + name;
    this.httpService.getSpecificData(this.href).subscribe((data) => {
      this.planetInfo = data['collection'];
    });
    this.hovered = true;
    this.setPlanet(planet, currentLeft, currentTop);

    event.target.onmouseout = () => {
      this.movePlanet(planet, currentLeft, currentTop);
      this.hovered = false;
      planet.style.transition = '2s';
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.myPlanet.forEach((eachPlanet, index) => {
        const planet = document.getElementById('planet' + index);
        const width = eachPlanet.nativeElement.offsetWidth / 5;
        const height = eachPlanet.nativeElement.offsetHeight / 5;
        planet.style.width = width + 'px';
        planet.style.height = height + 'px';
      });
    }, 50);
  }

  ngOnInit() {
    this.httpService.getSpecificData('https://images-api.nasa.gov/album/Earth').subscribe((data) => {
      this.planetInfo = data['collection'];
    });
  }
}

