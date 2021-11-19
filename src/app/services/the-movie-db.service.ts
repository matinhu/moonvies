import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  private urlBase = 'https://api.themoviedb.org/3/';
  private apiKey = 'd15549276f6d9b7803c4266250bde84a';
  public page: number = 0;
  private tipo: string = '';
  constructor(private httpService: HttpService) {}

  getPopulares(tipo?: string) {
    return this.httpService.get(`${this.urlBase}movie/popular?api_key=${this.apiKey}${tipo? `&group=${tipo}` : ''}&language=pt-BR`)
  }
  getById(idFilme: number) {
    return this.httpService.get(`${this.urlBase}movie/${idFilme}?api_key=${this.apiKey}&language=pt-BR`)
  }

  getByTipo(tipo: string, filtro?: string, reset: boolean = false) {
    if (!this.tipo) {
      this.tipo = tipo;
      this.page++;
    } else {
      if (this.tipo !== tipo) {
        this.tipo = tipo;
        this.page = 1;
      } else {
        this.page++;
      }
    }
    if (reset) {
      this.page = 1;
    }
    return this.httpService.get(`${this.urlBase}movie/${tipo}?api_key=${this.apiKey}&language=pt-BR&page=${this.page}${filtro ? `&sort_by=${filtro}`:''}`)
  }
  search(query: string, filtro?: string, page?: any, reset: boolean = false) {
    if (!page) {
      this.page++
    } else {
      this.page = page;
    }
    if (reset) {
      this.page = 1;
    }
    return this.httpService.get(`${this.urlBase}search/movie?api_key=${this.apiKey}&query=${query}${filtro ? `&sort_by=${filtro}`:''}&language=pt-BR&page=${this.page}`)
  }




}
