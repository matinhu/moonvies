import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public search: string = '';
  public filtro: any = {};
  public populares: any[] = [
    {
      id: 0,
      nome: 'Streaming',
    },
    {
      id: 1,
      nome: 'Na TV',
    },
    {
      id: 2,
      nome: 'Para Alugar',
    },
    {
      id: 3,
      nome: 'Nos Cinemas',
    },
  ];
  public popularSelecionado: any = {};
  constructor() {}

  ngOnInit(): void {
    const idx = this.populares.findIndex((item: any) => item.id == 0);
    this.popularSelecionado = this.populares[idx];
  }

  clickBuscar() {}
  carregarPopulares() {

  }
}
