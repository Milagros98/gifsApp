import { Component } from '@angular/core';
import { GifsServices } from '../services/gifs.services';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService : GifsServices) { }

}
