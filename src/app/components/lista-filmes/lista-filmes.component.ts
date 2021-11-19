import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
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
  @Input() full: boolean = false;
  @Input() tipo: any;
  @Output() goToMovie = new EventEmitter<any>();
  @Output() clickCarregarTodos = new EventEmitter<any>();
  @Output() onFinalScroll = new EventEmitter<any>();
  @Input() carregarTodos: boolean = false;
  public todos: any[] = [];

  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
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
      let i: number,
        j: number,
        temparray: any[][] = [],
        chunk = 4;
      for (i = 0, j = this.filmes.length; i < j; i += chunk) {
        temparray.push(this.filmes.slice(i, i + chunk));
      }
      this.todos = temparray;
    }
  }

  public clickSelecao(filme: any) {
    this.goToMovie.emit(filme);
  }

  clickCarregarMais() {
    this.carregarTodos = true;
    this.clickCarregarTodos.emit(this.tipo);
  }

  nextBatch(index: any) {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log('idx:', index);
    console.log('total:', total);
    console.log('end:', end);
    if (end === total && this.carregarTodos) {
      this.onFinalScroll.emit(this.tipo);
    }
  }
}
