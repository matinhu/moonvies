import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

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
      query: 'streaming',
      disabled: true
    },
    {
      id: 1,
      nome: 'Na TV',
      query: 'on-tv',
      disabled: true
    },
    {
      id: 2,
      nome: 'Para Alugar',
      query: 'for-rent',
      disabled: true
    },
    {
      id: 3,
      nome: 'Nos Cinemas',
      query: 'in-theatres',
    },
  ];
  public filmesPopulares: any[] = [];
  public popularSelecionado: any = {};
  constructor(
    private movieService: TheMovieDbService,
    private router: Router
  ) {}

  async ngOnInit() {
    const idx = this.populares.findIndex((item: any) => item.id == 3);
    this.popularSelecionado = this.populares[idx];
    await this.carregarPopulares();
  }

  clickBuscar() {}
  async carregarPopulares() {
    const req: any = await this.movieService.getPopulares(
      this.popularSelecionado.query
    );
    if (req && req.results) {
      console.log(req.results);
      this.filmesPopulares = req.results;
    }
  }
  
  irParaDetalhesFilme(filme: any) {
    this.router.navigate(['movie/', filme.id]);
  }
}
