import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './shared/components/sidebar.component';
import { AlertComponent } from './shared/components/alert.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet, 
    ButtonModule, 
    SidebarComponent,
    AlertComponent,
    ToastModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent {
  title = 'Meu projeto PrimeNG';
}
