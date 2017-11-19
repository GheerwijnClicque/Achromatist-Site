import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  public uploadData(data: any): Observable<any> {
    return this.http.post('/api/photos', data, {headers: new HttpHeaders().delete('Content-Type')});
  }
}
