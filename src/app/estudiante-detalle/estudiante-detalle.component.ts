import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../estudiantes/estudiante';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css']
})
export class EstudianteDetalleComponent implements OnInit {
  
  @Input() estudiante: Estudiante;
  constructor() { }

  ngOnInit() {
  }

}
