import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  // i18nSelect
  public name: string = "Joao";
  public gender: 'male'|'female' = "male";
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }




  // i18nPlural
  public clients: string[] = [
    'Maria','Pedro','Joao', 'Hernando', 'Eduardo','Melissa', 'Natalia'
  ];

  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }


  // KeyValue Pipe
  public person ={
    name:'Joao',
    age:'31',
    address:'43 Y Bolivia'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value=> console.log(value))
  )
}
