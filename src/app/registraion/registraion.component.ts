import { Component } from '@angular/core';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-registraion',
  standalone: true,
  imports: [ Form1Component, Form2Component],
  templateUrl: './registraion.component.html',
  styleUrl: './registraion.component.css'
})
export class RegistraionComponent {

}
