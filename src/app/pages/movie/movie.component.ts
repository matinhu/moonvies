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
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  public imgBack: string = 'https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/';
  public filme: any = {};
  public generos: string = '';
  public duracao: string = '';

  constructor(
    private aRoute: ActivatedRoute,
    private route: Router,
    private movieService: TheMovieDbService,
    private globalService: GlobalService
  ) {}
  
  
  ngOnInit(): void {
    this.aRoute.params.subscribe(async (param: any) => {
      if (param.id) {
        this.carregarDetalhes(param.id);
      }
    });
  }

  async carregarDetalhes(idFilme: number) {
    const result = await this.movieService.getById(idFilme);
    if (result) {
      this.filme = result;
      let strGeneros = '';
      for (const genero of this.filme.genres) {
        strGeneros = strGeneros.length == 0 ? strGeneros+=genero.name : strGeneros+=', '+genero.name;
      }
      this.generos = strGeneros;
      if (this.filme.runtime) {
        this.duracao = this.globalService.getHoursAndMinutesByMinutes(this.filme.runtime); 
      }

      let votos: string = this.filme.vote_average.toString();
      votos = votos.replace('.', '');
      if (votos.length == 1) {
        votos = votos+'0';
      }
      this.filme.vote_average = Number(votos);
    }
    console.log(this.filme)
  }
}
