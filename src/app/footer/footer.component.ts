import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PagesService } from '../pages/pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  showFooter;
  constructor(private pageService: PagesService) {}

  ngOnInit() {
    this.pageService.getErrorPageStatus().subscribe((data: any) => {
      console.log('res', data);
      this.showFooter = data;
    });
  }
}
