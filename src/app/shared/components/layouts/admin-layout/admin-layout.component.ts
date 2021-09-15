import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  defaultImage: string;
  placeholderImage: string;

  currentLang: string;
  constructor(
    public translate: TranslateService
  ) { 
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    setTimeout(() => {
      this.defaultImage = './assets/Images/myPhoto.jfif'
    }, 2000);
    this.placeholderImage = 'https://via.placeholder.com/100x100'

  }

  ngOnInit(): void {
  }

  changeCurrentLang(lang:string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang)
  }

}
