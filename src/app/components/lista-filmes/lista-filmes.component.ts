import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';


@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaFilmesComponent implements OnInit, OnChanges {
  @Input() filmes: any = [];
  @Output() goToMovie = new EventEmitter<any>();

  constructor() {}

  async ngOnInit() {
    await this.carregarFilmes();
  }

  async carregarFilmes() {
    const genero: any = '';
    const tipo: any = '';
  }
  ngOnChanges() {
    if (this.filmes) {
      console.log(this.filmes);
    }
  }

  public clickSelecao(filme: any) {
    this.goToMovie.emit(filme);
  }
}
