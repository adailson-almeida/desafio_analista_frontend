import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-add',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
  ],
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css'],
})
export class TicketAddComponent implements OnInit {
  tituloChamado: string = '';

  ticketForm!: FormGroup;
  categorias: any[] = [];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.categorias = [
      { label: 'Hardware', value: 'Hardware' },
      { label: 'Software', value: 'Software' },
      { label: 'Rede', value: 'Rede' },
      { label: 'Outro', value: 'Outro' },
    ];

    this.ticketForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: [null, Validators.required],
    });
    console.log('Componente de Adição de Chamados carregado!');
  }

  salvarChamado() {
    if (this.ticketForm.valid) {
      this.ticketService.addChamado(this.ticketForm.value).subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Chamado registrado!',
        });
        this.router.navigate(['/tickets/list']);
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Por favor, preencha todos os campos obrigatórios (*)!',
      });
    }
  }

  voltarParaLista() {
    this.router.navigate(['/tickets/list']);
  }
}
