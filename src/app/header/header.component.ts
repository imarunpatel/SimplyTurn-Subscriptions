import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages/pages.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showHeader;

  constructor(private pageService: PagesService) {}

  ngOnInit(): void {
    $(function () {
      $(document).scroll(function () {
        var $nav = $('#topnav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });

    // Menu
    $('.navbar-toggle').on('click', function (event) {
      $(this).toggleClass('open');
      $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-1).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function (e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this)
          .parent('li')
          .toggleClass('open')
          .find('.submenu:first')
          .toggleClass('open');
      }
    });

    $('.navigation-menu a').each(function () {
      if (this.href == window.location.href) {
        $(this).parent().addClass('active');
        $(this).parent().parent().parent().addClass('active');
        $(this).parent().parent().parent().parent().parent().addClass('active');
      }
    });

    this.pageService.getErrorPageStatus().subscribe(
      (data: any) => {
        console.log('res', data);
        this.showHeader = data;
      }
    )
  }
}
