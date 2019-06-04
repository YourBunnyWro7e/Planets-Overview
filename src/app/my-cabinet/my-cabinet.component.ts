import {Component, OnInit, AfterContentChecked} from '@angular/core';
import {HttpService} from '../http.service';
import {User} from './user';

@Component({
  selector: 'app-my-cabinet',
  templateUrl: './my-cabinet.component.html',
  styleUrls: ['./my-cabinet.component.css']
})
export class MyCabinetComponent implements OnInit, AfterContentChecked {
  userInfo: User[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getSpecificData('https://images-api.nasa.gov/search?q=Gemini').subscribe((data) => {
      this.userInfo = data['collection'];
    });
  }

  ngAfterContentChecked() {
    // console.log(this.userInfo);
  }
}
