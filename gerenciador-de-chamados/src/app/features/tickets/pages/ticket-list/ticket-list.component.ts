import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';

interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: 
  [
    CommonModule, 
    CardModule,
    TableModule,
    SelectModule
  ],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  chamados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.chamados = [
      { id: 1, titulo: 'Impressora não funciona', descricao: 'A impressora HP no 3º andar não liga de jeito nenhum. Já verifiquei o cabo de energia.', categoria: 'Hardware' },
      { id: 2, titulo: 'Erro ao logar no sistema X', descricao: 'Ao tentar acessar o sistema X com meu usuário padrão, recebo a mensagem "Usuário ou senha inválidos".', categoria: 'Software' },
      { id: 3, titulo: 'Internet lenta na sala 5', descricao: 'A velocidade da conexão de rede na sala 5 está muito abaixo do normal nas últimas 2 horas.', categoria: 'Rede' },
      { id: 4, titulo: 'Solicitação de novo monitor', descricao: 'Preciso de um monitor extra para minha estação de trabalho, o atual é muito pequeno.', categoria: 'Hardware' }
    ];
  }

}