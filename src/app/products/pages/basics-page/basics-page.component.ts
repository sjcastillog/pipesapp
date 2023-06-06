import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'joao';
  public nameUpper:string = 'JOAO';
  public fullName:string = 'JoAo cAstIllO';

  public customDate: Date = new Date();
}
