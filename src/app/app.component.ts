import { ChangeDetectorRef, Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  title = 'moonvies';

  public inProgress: Observable<boolean>;

  constructor(
    private httpService: HttpService,
    private cdref: ChangeDetectorRef,
    private router: Router
  ) {
    this.inProgress = this.httpService.inProgress;
  }


  list = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
  subscribeTimer: any;
  timeLeft = 10;

  ngOnInit() {
    this.observableTimer();
  }


  ngAfterContentChecked() {
    this.cdref.detectChanges();
    this.startPages();  

  }

  goTo(url: string) {
    this.router.navigate([url]);

  }



  openEnvelope() {

    const letter = document.querySelector('.letter');
    if (letter) {

      if (letter.classList.contains('letter--open')) {
        letter.classList.remove('letter--open');
        letter.classList.add('letter--close');
        setTimeout(function () {
          letter.classList.remove('letter--close');
        }, 600);
      } else {
        letter.classList.remove('letter--close');
        letter.classList.add('letter--open');
      }



    }



  }

  closeEnvelope() {
    const letter = document.querySelector('.letter');
    if (letter) {
      letter.classList.remove('letter--open');
      letter.classList.add('letter--close');
      setTimeout(function () {
        letter.classList.remove('letter--close');
      }, 600);
    }
  }





  observableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
      console.log(this.subscribeTimer)
    });
  }



  startPages() {
    const pages: any = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (i % 2 === 0) {
        page['style'].zIndex = (pages.length - i);
      }
    }



    for (var i = 0; i < pages.length; i++) {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick = function () {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
        }
        else {
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
        }
      }
    }


  }




}