import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  ReactiveFormsModule // Importe este módulo
} from '@angular/forms';

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
    SelectModule
  ],
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  tituloChamado: string = '';

  ticketForm!: FormGroup;
  categorias: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.categorias = [
      { label: 'Hardware', value: 'HARDWARE' },
      { label: 'Software', value: 'SOFTWARE' },
      { label: 'Rede', value: 'NETWORK' },
      { label: 'Outro', value: 'OTHER' }
    ];

    this.ticketForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: [null, Validators.required]
    });
    console.log('Componente de Adição de Chamados carregado!');
  }

  salvarChamado() {
    if (this.ticketForm.valid) {
      console.log('Chamado a ser salvo:', this.ticketForm.value);
      alert('Chamado salvo com sucesso! (Verifique o console para os dados)');
      // Lógica para enviar para o serviço/API (faremos isso mais tarde)
      this.ticketForm.reset(); // Limpa o formulário após salvar
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

}