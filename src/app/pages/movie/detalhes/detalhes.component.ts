import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit, OnChanges {
  @Input() filme: any = {};
  
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  public imgBack: string = 'https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/';
  public generos: string = '';
  public duracao: string = '';
  

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.filme.id) {
    this.inicializarDados();

    }
  }

  inicializarDados() {

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

}
