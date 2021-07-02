import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  day = 2
  title = 'language';
  supportLanguage = ['english', 'العربيه'];

  constructor(private translateServices: TranslateService) {
    this.translateServices.addLangs(this.supportLanguage);
    this.translateServices.setDefaultLang('en');
    const browserLang = this.translateServices.getBrowserLang();
    this.translateServices.use(browserLang)
  }

  selectLang(lang: string) {
    this.translateServices.use(lang)
  }

  /////
  toggleAddTask() {
    console.log('done ya mane');

  }
  ngOnInit() {
    let span = document.querySelector('.up')
    window.onscroll = function () {
      this.scrollY >= 500 ? span.classList.add('show') : span.classList.remove('show')
    }
  }
  onClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
