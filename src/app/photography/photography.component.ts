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
  public menuActive: boolean = false;
  public menuToggleState: string = '';
  public galleryActive: boolean = true;
  public image;
  public imageIndex: number = 0;

  public fullGalleryClass: string = 'active';
  public detailGalleryClass: string = (this.fullGalleryClass === 'active' ? '' : 'active');

  photos: IPhoto[] = [];
  constructor(private photoService: PhotoService) {
    // this.image = this.images[0];
    this.photoService.getAllPhotos().subscribe((photos: IPhoto[]) => {
      this.photos = photos;
      this.image = this.photos[0];
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
        this.image = this.photos[this.imageIndex];
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
    this.image = this.photos[this.imageIndex];
  }

  open(index: number): void {
    // this.galleryActive = true;
    this.toggleGallery('detail');
    this.imageIndex = index;
    this.image = this.photos[this.imageIndex];
  }

  nextImage() {
    this.imageIndex = (this.imageIndex + 1) % this.photos.length;
    this.image = this.photos[this.imageIndex];
  }

  previousImage() {
    this.imageIndex = this.imageIndex === 0 ? this.imageIndex = this.photos.length - 1 : this.imageIndex -= 1;
    this.image = this.photos[this.imageIndex];
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
