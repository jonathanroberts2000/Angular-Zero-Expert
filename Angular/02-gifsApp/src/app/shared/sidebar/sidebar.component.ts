import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  buscar(item: string){
    this.gifsService.buscarGifs(item);
  }
}
