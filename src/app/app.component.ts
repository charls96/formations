import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formaciones';

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('es-ES');
    this.translateService.use(localStorage.getItem('lang') || 'es-ES');
  }
}
