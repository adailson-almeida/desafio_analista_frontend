import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './shared/components/sidebar.component';

@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet, 
    ButtonModule, 
    SidebarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent {
  title = 'Meu projeto PrimeNG';
}
