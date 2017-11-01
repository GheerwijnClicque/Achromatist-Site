import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Router, NavigationEnd } from '@angular/router';
import { SwiperModule } from 'angular2-useful-swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navHide: boolean = true;
  menuActive: boolean = false;
  menuToggleState: string = '';
  public images: any = [
      {id: 1, category: '35mm', type: 'b&w', src: 'assets/gallery/1.jpg', thumb: 'assets/gallery/1.jpg'},
      {id: 2, category: '35mm', type: 'b&w', src: 'assets/gallery/2.jpg'},
      {id: 3, category: '35mm', type: 'b&w', src: 'assets/gallery/3.jpg'},
      {id: 4, category: '35mm', type: 'b&w', src: 'assets/gallery/4.jpg'},
      {id: 5, category: '35mm', type: 'b&w', src: 'assets/gallery/5.jpg'},
      {id: 6, category: '35mm', type: 'b&w', src: 'assets/gallery/6.jpg'},
      {id: 7, category: '35mm', type: 'b&w', src: 'assets/gallery/7.jpg'},
      {id: 8, category: '35mm', type: 'b&w', src: 'assets/gallery/8.jpg'},
      {id: 9, category: '35mm', type: 'b&w', src: 'assets/gallery/9.jpg'},
  ];
    public imageIndex: number = 0;
  public image: object = {src: 'assets/gallery/2.jpg'};
  public imageState: string = '';
  public config: SwiperOptions;

  constructor(@Inject(DOCUMENT) private document: Document, router: Router){ }

  ngOnInit() {
  }

   toggleNav(e) {
    e.preventDefault();
    console.log('toggle menu');
    if (this.menuActive) {
      this.menuActive = false;
      this.menuToggleState = '';
    } else {
      this.menuActive = true;
      this.menuToggleState = 'open';
    }

  }

  closeNav() {
    this.menuActive = false;
  }


}
