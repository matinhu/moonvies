import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() filme: any = {};
  @Input() diameter!: number;
  @Input() type: string = 'default';
  @ViewChild('customSpinner', { static: false }) customSpinner!: MatSpinner;
  @ViewChild('customSpinnerBackground', { static: false }) customSpinnerBackground!: MatSpinner;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.filme.id) {
      setTimeout(() => {
        this.getColor();
      }, 200);
    }
  }

  getColor() {
    let color = '#666666';
    let back = '#666666';
    if (this.filme.vote_average) {
      color = this.filme.vote_average > 50 && this.filme.vote_average < 70 ? '#d2d531' : this.filme.vote_average > 70 ? '#21d07a' : '#db2360';
      back = this.filme.vote_average > 50 && this.filme.vote_average < 70 ? '#423d0f' : this.filme.vote_average > 70 ? '#204529' : '#571435';
    }
    if (this.customSpinner) {
      const element = this.customSpinner._elementRef.nativeElement;
      const circle = element.querySelector('circle');
      circle.style.stroke = color;
      //circle.style.strokeWidth = '15%';
    }
    if (this.customSpinnerBackground) {
      const element = this.customSpinnerBackground._elementRef.nativeElement;
      const circle = element.querySelector('circle');
      circle.style.stroke = back;
    }
    // const element: any = document.getElementById('spin'+this.filme.id);
    // if(element) {
    //   const el = element.nativeElement
    //   const circle: any = element?.querySelector("circle");
    //   circle.style.stroke = color;
    // }
  }
}
