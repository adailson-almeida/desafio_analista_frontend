import { Component, ChangeDetectorRef } from '@angular/core';
import {
  Router,
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './shared/components/sidebar.component';
import { AlertComponent } from './shared/components/alert.component';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    SidebarComponent,
    AlertComponent,
    ToastModule,
    ProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class AppComponent {
  title = 'Gerenciador de Chamados';
  isLoading = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        }, 900);
      }
    });
  }
}
