import { Component, OnInit } from '@angular/core';
import { cricket } from './models/cricket';
import { Playerslist } from './values/playerslist';

@Component({
  selector: 'app-rest-spread',
  templateUrl: './rest-spread.component.html',
  styleUrls: ['./rest-spread.component.css']
})
export class RestSpreadComponent implements OnInit {
  public playerslist: cricket[];
  public showList: boolean = false;
  public categories: Array<any> = [
    {
      text: 'Dhoni',
      value: 'Dhoni'
    },
    {
      text: 'Sachin',
      value: 'Sachin'
    }
  ];
  public dropDownItems = this.categories;
  public defaultItem = { text: 'Dhoni', value: null };
  constructor() {}
  ngOnInit() {
    this.playerslist = [...Playerslist];
    this.playerslist.push({
      PlayerName: 'Adam Gilchrist',
      PlayerNumber: 1,
      Country: 'Australia',
      Image: null
    });
  }
}
