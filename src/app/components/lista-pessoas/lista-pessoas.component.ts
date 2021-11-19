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
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaPessoasComponent implements OnInit, OnChanges {
  @Input() pessoas: any = [];
  @Output() goToMovie = new EventEmitter<any>();

  constructor() {}

  async ngOnInit() {
    await this.carregarPessoas();
  }

  async carregarPessoas() {
    const genero: any = '';
    const tipo: any = '';
  }
  ngOnChanges() {
    if (this.pessoas) {
    }
  }

  public clickSelecao(filme: any) {
    this.goToMovie.emit(filme);
  }
}
