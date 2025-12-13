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
  ReactiveFormsModule
} from '@angular/forms';
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
    SelectModule
  ],
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  tituloChamado: string = '';

  ticketForm!: FormGroup;
  categorias: any[] = [];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) { }

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
      this.ticketService.addChamado(this.ticketForm.value).subscribe(response => {
        this.router.navigate(['/tickets/list']);
      })
      
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

}