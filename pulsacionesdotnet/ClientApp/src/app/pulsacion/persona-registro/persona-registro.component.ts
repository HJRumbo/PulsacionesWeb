import { Component, OnInit } from '@angular/core';
import { Persona } from './../models/persona';
import { PersonaService } from './../../services/persona.service'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;

  constructor(private personaServicio: PersonaService) { }

  ngOnInit() {
    
    this.persona = new Persona;
  }

  pulsaciones = 0;

  add(){

    alert(this.personaServicio.post(this.persona));
    this.pulsaciones = this.personaServicio.calcularPulsacion(this.persona);
  }

}

