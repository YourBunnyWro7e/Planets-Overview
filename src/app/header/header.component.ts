import { Component, OnInit, NgZone } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  width: number;
  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.width = window.innerWidth;
      });
    };
  }

  ngOnInit() {
      this.width = window.innerWidth;
  }

}
