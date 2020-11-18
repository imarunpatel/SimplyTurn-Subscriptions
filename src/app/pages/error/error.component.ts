import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {


  constructor(private pageservice: PagesService) { }

  ngOnInit(): void {
    this.pageservice.sendErrorStatus(true);
  }

  ngOnDestroy() {
    this.pageservice.sendErrorStatus(false);
  }

}
