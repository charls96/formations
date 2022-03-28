import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserBannerService {
  

  constructor(private httpClient:HttpClient) {

  }

  getUser():Observable<any> {
    return this.httpClient.get("http://localhost:3000/users/" + this.getRandomUserId());
  }

  getRandomUserId(): number{
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
}
