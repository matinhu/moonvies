import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filme',
  templateUrl: './item-filme.component.html',
  styleUrls: ['./item-filme.component.scss'],
})
export class ItemFilmeComponent implements OnInit, OnChanges {
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  @Input() filme: any = {};
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.filme.vote_average) {
      console.log(this.filme.vote_average)
      let votos: string = this.filme.vote_average.toString();
      votos = votos.replace('.', '');
    }
  }
}
