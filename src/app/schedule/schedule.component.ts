import {Component, OnInit, AfterContentChecked} from '@angular/core';
import {HttpService} from '../http.service';
import {Flights} from './flights';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit, AfterContentChecked {
  displayedColumns: string[] = ['number', 'center', 'date_created', 'description'];
  dataSource: Flights[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getSpecificData('https://images-api.nasa.gov/search?q=apollo%2011').subscribe((data) => {
      this.dataSource = data['collection'].items;
      console.log(data['collection'].items);
    });
  }

  ngAfterContentChecked() {
    console.log(this.dataSource);
  }
}
