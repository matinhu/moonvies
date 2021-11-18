import { Component, OnInit } from '@angular/core';
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
      query: 'streaming'
    },
    {
      id: 1,
      nome: 'Na TV',
      query: 'on-tv'
    },
    {
      id: 2,
      nome: 'Para Alugar',
      query: 'for-rent'
    },
    {
      id: 3,
      nome: 'Nos Cinemas',
      query: 'in-theatres'
    },
  ];
  public filmesPopulares: any [] = [];
  public popularSelecionado: any = {};
  constructor(private movieService: TheMovieDbService) {}

  async ngOnInit() {
    const idx = this.populares.findIndex((item: any) => item.id == 0);
    this.popularSelecionado = this.populares[idx];
    await this.carregarPopulares();
  }

  clickBuscar() {}
  async carregarPopulares() {
    const req: any = await this.movieService.getPopulares(this.popularSelecionado.query);
    if (req && req.results) {
      console.log(req.results);
      this.filmesPopulares = req.results;
    }
  }
}
