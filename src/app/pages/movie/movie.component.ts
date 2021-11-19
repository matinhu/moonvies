import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public filmes: any[] = [];
  public filme: any = {};
  public detalhes: boolean = false;
  public filtro: any = {}
  public carregarTodos: boolean = false;
  public tipo: string = '';
  public sortBy = [
    { query:'popularity.desc', name: 'Popularidade (maior)' }, 
    { query:'popularity.asc', name: 'Popularidade (menor)' }, 
    { query:'vote_average.desc', name: 'Avaliação (melhor)' }, 
    { query:'vote_average.asc', name: 'Avaliação (pior)' }, 
    { query:'primary_release_date.desc', name: 'Lançamento (novo)' }, 
    { query:'primary_release_date.asc', name: 'Lançamento (antigo)' }, 
    { query:'title.asc', name: 'Título (A-Z)' }, 
    { query:'title.desc', name: 'Título (Z-A)' }, 
  ]
  public tipoFilme: string = '';
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private movieService: TheMovieDbService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.aRoute.params.subscribe(async (param: any) => {
      if (param.id) {
        if (this.globalService.onlyNumbers(param.id)) {
          this.detalhes = true;
          this.carregarDetalhes(param.id);
        } else {
          const url = this.router.url;
          let tipo = url.toString().replace('/movie/', '').replace('-','_');
          this.tipo = tipo;
          this.ajustarTipoFilme()
          this.carregarFilmes(this.tipo);
        }
      } else {
        this.tipo = 'popular';
        this.tipoFilme = 'Filmes Populares'
        this.carregarFilmes('popular');
      }
    });
  }

  ajustarTipoFilme() {
    if (this.tipo === 'now_playing') {
      this.tipoFilme = 'Filmes em Cartaz';

    } else if (this.tipo === 'upcoming') {
      this.tipoFilme = 'Filmes que estreiam em breve';

    } else if (this.tipo === 'top_rated') {
      this.tipoFilme = 'Filmes mais bem avaliados';

    } else if (this.tipo === 'popular') {
      this.tipoFilme = 'Filmes Populares';
    }
  }
  async clickFiltrar() {
    this.carregarTodos = false;
    this.filmes = [];
    await this.carregarFilmes(this.tipo, this.carregarTodos, this.filtro.sortBy, true);

    
  }
  async buscarFilmes() {
    const req: any = await this.movieService.search('', this.filtro.sortBy);
    if (req && req.results) {
      console.log(req.results);
      if (this.carregarTodos) {
        this.filmes = [...this.filmes, ...req.results];
        console.log(this.filmes)
      } else {
        this.filmes = req.results;
      }
    }
  }
  async carregarFilmes(tipo: any, carregarMais: boolean = false, filtro?: string, reset?: boolean) {
    const req: any = await this.movieService.getByTipo(tipo, filtro, reset);
    if (req && req.results) {
      console.log(req.results);
      if (carregarMais) {
        this.filmes = [...this.filmes, ...req.results];
        console.log(this.filmes)
      } else {
        this.filmes = req.results;
      }
      
    }
    this.filtro.sortby = 'popularity.desc';
  }

  async carregarDetalhes(idFilme: number) {
    const result = await this.movieService.getById(idFilme);
    if (result) {
      this.filme = result;
    }
    console.log(this.filme);
  }

  irParaDetalhesFilme(filme: any) {
    this.router.navigate(['movie/', filme.id]);
  }

  clickCarregarMais(tipo: any) {
    this.carregarFilmes(tipo, true);
  }
}
