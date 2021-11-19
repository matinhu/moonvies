import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
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
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaFilmesComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() filmes: any = [];
  @Input() full: boolean = false;
  @Input() busca: boolean = false;
  @Input() mobile: boolean = false;
  @Input() tipo: any;
  @Input() carregarTodos: boolean = false;
  @Input() paginador: any;

  @Output() goToMovie = new EventEmitter<any>();
  @Output() clickCarregarTodos = new EventEmitter<any>();
  @Output() onFinalScroll = new EventEmitter<any>();
  @Output() nextPage = new EventEmitter<any>();

  public todos: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
  constructor() {}

  async ngOnInit() {
    await this.carregarFilmes();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page
        .pipe(tap(() => this.nextPage.emit(this.paginator.pageIndex)))
        .subscribe();
    }
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
