import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get<any>("https://facebook-ui-clone-2d854-default-rtdb.firebaseio.com/watch/data.json/");
  }
}
