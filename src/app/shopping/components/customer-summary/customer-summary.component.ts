import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerSummaryComponent implements OnInit {

  constructor() { }
  @Input('order') order;
  ngOnInit() {
  }

}
