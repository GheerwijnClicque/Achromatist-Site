import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotographyComponent } from './photography/photography.component';
import { HomeComponent } from './home/home.component';

import { SwiperModule } from 'angular2-useful-swiper';
import { PhotoService } from './photo.service';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';

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
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PhotographyComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PhotoService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
