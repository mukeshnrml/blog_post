import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistraionComponent } from './registraion/registraion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLinkActive, RouterLink, RegistraionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mn';

  blogTitle:string ='';
  blogDetail:string ='';
  imageUrl:string ='';
  blogURL:string ='';
 



}
