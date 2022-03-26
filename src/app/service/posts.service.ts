import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  listPosts():Observable<any> {
    /* return this.httpClient.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=cjKXnMZUlNBBkc7BrodnOzHfC3Z4tca4WXQzosEu"); */
    return this.httpClient.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-6-3&api_key=cjKXnMZUlNBBkc7BrodnOzHfC3Z4tca4WXQzosEu");
  }
}
