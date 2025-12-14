import { Routes } from '@angular/router';
import { TicketListComponent } from './features/tickets/pages/ticket-list/ticket-list.component';
import { TicketAddComponent } from './features/tickets/pages/ticket-add/ticket-add.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tickets/list', pathMatch: 'full' },
  { path: 'tickets/list', component: TicketListComponent },
  { path: 'tickets/add', component: TicketAddComponent },
];
