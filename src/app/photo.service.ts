import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  test() {
    return this.http.get('/api/photos');
  }

  getAllPhotos() {
    return this.http.get('/api/photos');
  }
}
