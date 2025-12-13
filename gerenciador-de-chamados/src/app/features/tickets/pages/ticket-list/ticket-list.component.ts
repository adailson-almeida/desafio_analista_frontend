import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TicketService } from '../../services/ticket.service';
import { Chamado } from '../../models/ticket.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: 
  [
    CommonModule, 
    CardModule,
    TableModule,
    AsyncPipe
  ],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  chamados$!: Observable<Chamado[]>;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    
    this.chamados$ = this.ticketService.chamados$;
  }

}