import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, CardModule], // Importe CommonModule e componentes PrimeNG
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  chamados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    
    console.log('Componente de Listagem de Chamados carregado!');
  }

}