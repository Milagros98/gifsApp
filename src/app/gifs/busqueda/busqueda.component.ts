import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../services/gifs.services';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  constructor(private gifsServices: GifsServices){ }

  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>; 

  buscar( ){

    if(this.txtBuscar.nativeElement.value == ''){
      return;
    }

    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
    this.gifsServices.buscarGifs(valor);
  }

}
