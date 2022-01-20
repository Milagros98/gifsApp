import { Component } from '@angular/core';
import { GifsServices } from '../../gifs/services/gifs.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService : GifsServices) {}

  get historial() : string[]{

    return this.gifsService.historial;

  }

  buscar(busqueda : string){
    this.gifsService.buscarGifs(busqueda);
  }

}
