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
  selectedDate: string|any;

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
  }

  constructor(private postsService:PostsService) {
    this.listPosts();
  }

  ngOnInit(): void {
  }

  selectCamera(event: any) {
    const camera = event.target.value;
    this.selectedCamera = camera;
    this.listPosts();
  }

  selectDate(event:any) {
    const date = event.target.value;
    this.selectedDate = date;
    this.listPosts();
  }

  listPosts(){
    const promise = new Promise<void>((resolve, reject) => {
      this.postsService.listPosts(this.selectedDate, this.selectedCamera).subscribe({
        next: r => {
          this.posts = r.photos;
          resolve();
        },
        error: e => {
          reject(e);
        }
      });
    });
    return promise;
  }
}
