import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoService } from '../photo.service';
import { IPhoto } from './photo.class';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {
  public my_Class = 'checked';
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
  public menuActive: boolean = false;
  public menuToggleState: string = '';
  public galleryActive: boolean = true;
  // public image: object = {src: 'assets/gallery/2.jpg'};
  public image;
  public imageIndex: number = 0;

  public fullGalleryClass: string = 'active';
  public detailGalleryClass: string = (this.fullGalleryClass === 'active' ? '' : 'active');

  photos: IPhoto[] = [];
  constructor(private photoService: PhotoService) {
    this.image = this.images[0];
    this.photoService.getAllPhotos().subscribe((photos: IPhoto[]) => {
      this.photos = photos;
    });
  }


  toggleGallery(mode: string) {
      if (mode === 'full') {
        this.fullGalleryClass = 'active';
        this.detailGalleryClass = '';
        this.galleryActive = false;

      } else {
        this.fullGalleryClass = '';
        this.detailGalleryClass = 'active';
        this.galleryActive = true;
        this.image = this.images[this.imageIndex];
      }
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

  expandGallery() {
    this.galleryActive = !this.galleryActive;
    this.image = this.images[this.imageIndex];
  }

  open(index: number): void {
    // this.galleryActive = true;
    this.toggleGallery('detail');
    this.imageIndex = index;
    this.image = this.images[this.imageIndex];
  }

  nextImage() {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
    this.image = this.images[this.imageIndex];
  }

  previousImage() {
    this.imageIndex = this.imageIndex === 0 ? this.imageIndex = this.images.length - 1 : this.imageIndex -= 1;
    this.image = this.images[this.imageIndex];
  }

  @HostListener('document:keyup', ['$event'])
  public keydown($event: KeyboardEvent): void {
    if (this.galleryActive) {
      if ($event.key === 'ArrowLeft' || $event.key === 'ArrowUp') {
        this.previousImage();
      } else if ($event.key === 'ArrowDown' || $event.key === 'ArrowRight') {
        this.nextImage();
      }
    }
  }
}
