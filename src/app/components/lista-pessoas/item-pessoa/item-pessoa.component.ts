import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-pessoa',
  templateUrl: './item-pessoa.component.html',
  styleUrls: ['./item-pessoa.component.scss'],
})
export class ItemPessoaComponent implements OnInit, OnChanges {
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  @Input() pessoa: any = {};
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
  }

  getColor() {}
}
