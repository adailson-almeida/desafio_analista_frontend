import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-add',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  tituloChamado: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('Componente de Adição de Chamados carregado!');
  }

  salvarChamado() {
    console.log('Chamado a ser salvo:', this.tituloChamado);
    alert(`Salvando chamado com título: ${this.tituloChamado}`);
    // Lógica para enviar para o serviço/API (faremos isso mais tarde)
  }

}