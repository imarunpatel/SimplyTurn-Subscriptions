import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit, OnDestroy {

  constructor(private pageservice: PagesService) { }

  ngOnInit(): void {
    this.pageservice.sendErrorStatus(true);
  }

  ngOnDestroy() {
    this.pageservice.sendErrorStatus(false);

    
  }


}
