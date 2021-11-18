import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filme',
  templateUrl: './item-filme.component.html',
  styleUrls: ['./item-filme.component.scss']
})
export class ItemFilmeComponent implements OnInit {
  @Input() filme: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
