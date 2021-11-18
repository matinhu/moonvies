import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  private urlBase = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'd15549276f6d9b7803c4266250bde84a';

  constructor(private httpService: HttpService) {}

  getPopulares(tipo?: string) {
    return this.httpService.get(`${this.urlBase}popular?api_key=${this.apiKey}${tipo? `&group=${tipo}` : ''}&language=pt-BR`)
  }
  getById(idFilme: number) {
    return this.httpService.get(`${this.urlBase}${idFilme}?api_key=${this.apiKey}&language=pt-BR`)
  }


}
