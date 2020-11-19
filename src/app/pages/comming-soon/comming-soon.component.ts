import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
declare var $: any;
@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit, OnDestroy {

  constructor(private pageservice: PagesService) {
    
  }

  ngOnInit(): void {
    this.pageservice.sendErrorStatus(true);
  }

  ngOnDestroy() {
    this.pageservice.sendErrorStatus(false);
  }
}
