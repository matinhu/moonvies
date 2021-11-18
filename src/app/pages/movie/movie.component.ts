import { Component, OnInit } from '@angular/core';
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
          const tipo = url.toString().replace('/movie/', '');
          this.carregarFilmes(tipo);
        }
      } else {
        this.carregarFilmes('popular');
      }
    });
  }

  async carregarFilmes(tipo: string) {
    const req: any = await this.movieService.getByTipo(tipo);
    if (req && req.results) {
      console.log(req.results);
      this.filmes = req.results;
    }
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
}
