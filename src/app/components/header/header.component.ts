import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logeado:boolean
caca="chumbin";
  constructor() { 
    this.logeado=false
    console.log("Componente app-header generandose...")
}
cerrarSesion(){
  this.logeado=false;
}
log(event){
  console.log(event);
}
  ngOnInit(): void {
    console.log("Componente app-header generado con exito");
    this.logeado=true;
    console.log("caca")
  }

}
