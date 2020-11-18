import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit, OnDestroy {

  constructor(private pageservice: PagesService) { }

  ngOnInit(): void {
    this.pageservice.sendErrorStatus(true);
  }

  ngOnDestroy() {
    this.pageservice.sendErrorStatus(false);
  }

}
