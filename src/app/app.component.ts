import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
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
    private cdref: ChangeDetectorRef
  ) { 
    this.inProgress = this.httpService.inProgress;
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

}