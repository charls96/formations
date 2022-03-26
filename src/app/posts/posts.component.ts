import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private postsService:PostsService) {
    this.listPosts();
  }

  ngOnInit(): void {
  }

  listPosts(){
    this.postsService.listPosts().subscribe({
      next: r => {
        /* console.log(r.near_earth_objects["2015-09-08"])
        this.posts = r.near_earth_objects["2015-09-08"]; */
        console.log(r.photos)
        this.posts = r.photos;
      },
      error: e => console.log(JSON.stringify(e))
    })
  }

}
