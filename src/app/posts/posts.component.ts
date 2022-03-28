import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  p: number = 1;
  posts: any = [];
  cameras: (string)[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'];
  selectedCamera: string|any;

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
  }

  constructor(private postsService:PostsService) {
    this.listPosts('');
  }

  ngOnInit(): void {
  }

  selectCamera(event: any) {
    const camera = event.target.value;
    this.listPosts(camera);
  }

  listPosts(camera: string){
    this.postsService.listPosts(camera).subscribe({
      next: r => {
        /* console.log(r.near_earth_objects["2015-09-08"])
        this.posts = r.near_earth_objects["2015-09-08"]; */
        console.log(r.photos);
        this.posts = r.photos;
      },
      error: e => console.log(JSON.stringify(e))
    })
  }
}
