import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';
import { map, startWith } from 'rxjs/operators';
export interface Movie {
  image: string;
  title: string;
  synopsis: string;
}
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
      disabled: true,
    },
    {
      id: 1,
      nome: 'Na TV',
      query: 'on-tv',
      disabled: true,
    },
    {
      id: 2,
      nome: 'Para Alugar',
      query: 'for-rent',
      disabled: true,
    },
    {
      id: 3,
      nome: 'Nos Cinemas',
      query: 'in-theatres',
    },
  ];
  public filmesPopulares: any[] = [];
  public popularSelecionado: any = {};
  public movies: Movie[] = [];
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  public filmesBusca: Movie[] = [];

  constructor(
    private movieService: TheMovieDbService,
    private router: Router
  ) {}

  public async carregarFilmes(value: string) {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    if (filterValue.length >= 3) {
      const req: any = await this.movieService.search(filterValue);
      if (req && req.results) {
        for (const movie of req.results) {
          const addMovie: Movie = {
            title: movie.title,
            image: this.imgPath + movie.poster_path,
            synopsis: movie.overview,
          };
          this.filmesBusca.push(addMovie);
        }
      }
    }
    // return this.movies.filter((movie: Movie) => movie.title.toLowerCase().includes(filterValue));
  }
  async ngOnInit() {
    const idx = this.populares.findIndex((item: any) => item.id == 3);
    this.popularSelecionado = this.populares[idx];
    await this.carregarPopulares();
  }

  clickBuscar() {
    this.carregarFilmes(this.search);
  }
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
