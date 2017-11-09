import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  test() {
    return this.http.get('/api');
  }

  getAllPhotos() {
    return this.http.get('/api/photos');
  }
}
