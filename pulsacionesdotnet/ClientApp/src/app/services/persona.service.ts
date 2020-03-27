import { Injectable } from '@angular/core';
import { Persona } from './../pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor() { }

  get(): Persona[] {

    return JSON.parse(localStorage.getItem('datos'));
  }

  calcularPulsacion(persona: Persona){

    var pulsaciones = 0;
    
    if (persona.sexo == "Masculino") {
      
      pulsaciones = (210 - persona.edad) / 10;

    }else{

      pulsaciones = (220 - persona.edad) / 10;
    }

    return pulsaciones;
  }

  post(persona: Persona) {

    if(persona.identificacion==null || persona.nombre==null || persona.sexo==null || persona.edad==null){

      return "Hay campos vacios, todos los campos son obligatorios.";

    }else{

      persona.pulsacion = this.calcularPulsacion(persona);

      let personas: Persona[] = [];
    
      if (this.get() != null) {
    
      personas = this.get();
    
      }
    
      personas.push(persona);
    
      localStorage.setItem('datos', JSON.stringify(personas));

      return "El usuario "+persona.nombre+", cuyo documento de identidad es: "+persona.identificacion+" ha sido guardado correctamente ";
    
    }
    
  
    }

    
}
