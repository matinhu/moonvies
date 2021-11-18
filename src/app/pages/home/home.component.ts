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
    const req: any = await this.movieService.getPopulares();
    if (req && req.results) {
      console.log(req.results);
      this.filmesPopulares = req.results;
    }
  }
}
