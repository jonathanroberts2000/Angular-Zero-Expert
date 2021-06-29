import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      /*subscribe(params => {
      console.log(params.id);
    });*/
      /*subscribe(params => {
      console.log(params.id);
    });*/
      .subscribe(({ id }) => {
        console.log(id);

        this.paisService.getPaisPorAlphaCode(id)
        .subscribe(pais => {
          console.log(pais);
        });
      });
  }
}
