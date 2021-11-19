import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  public carregarTodos: boolean = false;
  public filmes: any[] = [];
  public search: string = '';
  public paginador: any = {};
  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private movieService: TheMovieDbService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.aRoute.params.subscribe(async (param: any) => {
      if (param.query) {
        this.search = param.query;
        this.buscarFilmes(this.search);
      }
    });
  }
  
  async buscarFilmes(busca: string, page?: any) {
    if (busca.length >= 3) {
      const req: any = await this.movieService.search(this.search, page);
      if (req && req.results) {
        console.log(req);
        if (req.results.length === 0) {
          this.movieService.page = 0;
        }
        if (this.carregarTodos) {
          this.filmes = [...this.filmes, ...req.results];
          console.log(this.filmes);
          this.paginador = {current: req.page, total: req.total_pages, results: req.total_results}
        } else {
          this.filmes = req.results;
          this.paginador = {current: req.page, total: req.total_pages, results: req.total_results}
        }
      }
    }
  }
  irParaDetalhesFilme(movie: any) {
    this.router.navigate(['movie/', movie.id]);
  }
}
