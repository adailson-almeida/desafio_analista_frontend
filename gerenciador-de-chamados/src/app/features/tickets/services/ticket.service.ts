import { Injectable } from "@angular/core";
import { Chamado } from "../models/ticket.model";
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private chamadosSimulados: Chamado[] = [
    { id: 1, titulo: 'Impressora não funciona', descricao: 'A impressora HP no 3º andar não liga.', categoria: 'Hardware' },
    { id: 2, titulo: 'Erro de Login ERP', descricao: 'Ao tentar acessar o sistema X, recebo erro.', categoria: 'Software' }
  ];

  private chamadosSubject = new BehaviorSubject<Chamado[]>(this.chamadosSimulados);
  public chamados$: Observable<Chamado[]> = this.chamadosSubject.asObservable();

  constructor() { }

  addChamado(novoChamado: Omit<Chamado, 'id'>): Observable<Chamado> {
    const novoId = this.chamadosSimulados.length + 1;
    const chamadoCompleto: Chamado = {
        ...novoChamado,
        id: novoId
    };

    this.chamadosSimulados.push(chamadoCompleto);
    this.chamadosSubject.next(this.chamadosSimulados)

    return of(chamadoCompleto);
  }
}