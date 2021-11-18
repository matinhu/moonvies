import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'moonvies';

  public inProgress: Observable<boolean>;

  constructor(
    private httpService: HttpService,
    private cdref: ChangeDetectorRef,
    private router: Router
  ) { 
    this.inProgress = this.httpService.inProgress;
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  goTo(url: string) {
    this.router.navigate([url]);

  }
}