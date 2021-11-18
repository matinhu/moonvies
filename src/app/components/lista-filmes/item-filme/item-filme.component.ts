import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-item-filme',
  templateUrl: './item-filme.component.html',
  styleUrls: ['./item-filme.component.scss'],
})
export class ItemFilmeComponent implements OnInit, OnChanges {
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  @Input() filme: any = {};
  @ViewChild('customSpinner', { static: false }) customSpinner!: MatSpinner;
  @ViewChild('customSpinnerBackground', { static: false }) customSpinnerBackground!: MatSpinner;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.filme.vote_average) {
      console.log(this.filme.vote_average);
      let votos: string = this.filme.vote_average.toString();
      votos = votos.replace('.', '');
      if (votos.length == 1) {
        votos = votos+'0';
      }
      this.filme.vote_average = Number(votos);
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
