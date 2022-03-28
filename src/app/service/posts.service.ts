import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) {
  }

  listPosts(date:string, camera: string):Observable<any> {
    /* return this.httpClient.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=cjKXnMZUlNBBkc7BrodnOzHfC3Z4tca4WXQzosEu"); */

    let requestCamera: string;
    let requestDate: string;

    camera === undefined || camera === " " ? requestCamera = "" : requestCamera = "camera=" + camera + "&";
    date === undefined ? requestDate = "earth_date=" + this.getDate() + "&" : requestDate = "earth_date=" + date + "&";

    return this.httpClient.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?" + requestDate + requestCamera + "api_key=cjKXnMZUlNBBkc7BrodnOzHfC3Z4tca4WXQzosEu");
  }

  getDate(): string{
    let currentDate = new Date();
    let date = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+(currentDate.getDate()-1);
    return date;
  }
}
