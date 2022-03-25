import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang: any;

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'es-ES';
  }

  changeLanguage(event: any): void {
    const lang: string = event.target.value;
    localStorage.setItem('lang', lang);
    window.location.reload();
    console.log(event.target.value);
  }

}
