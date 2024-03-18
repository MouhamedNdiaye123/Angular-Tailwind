import { Component } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
