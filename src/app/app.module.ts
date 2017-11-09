import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotographyComponent } from './photography/photography.component';
import { HomeComponent } from './home/home.component';

import { SwiperModule } from 'angular2-useful-swiper';
import { PhotoService } from './photo.service';

const ROUTES = [
/* {
    path: '',
    redirectTo: 'photography',
    pathMatch: 'full'
  }, */
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PhotographyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwiperModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
