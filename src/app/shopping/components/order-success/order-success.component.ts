import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderSuccessComponent implements OnInit {

  constructor(router: Router) {
        setTimeout(() => router.navigate(['/']), 3000);
   }

  ngOnInit() {
  }

}
