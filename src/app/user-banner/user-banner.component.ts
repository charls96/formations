import { Component, OnInit } from '@angular/core';
import { UserBannerService } from '../service/user-banner.service'

@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.css']
})
export class UserBannerComponent implements OnInit {
  user: any;

  constructor(private userBannerService: UserBannerService) {
    this.user = '';
    this.getUser();
  }

  ngOnInit(): void {

  }

  getUser(){
    const promise = new Promise<void>((resolve, reject) => {
      this.userBannerService.getUser().subscribe({
        next: r => {
          this.user = r;
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
