import { Injectable } from "@angular/core";
import { Chamado } from "../models/ticket.model";
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private readonly STORAGE_KEY = 'chamados_data';

    private chamadosSimulados: Chamado[] = [];

  private chamadosSubject = new BehaviorSubject<Chamado[]>(this.chamadosSimulados);
  public chamados$: Observable<Chamado[]> = this.chamadosSubject.asObservable();

  constructor() { 
    this.loadInitialData();
  }

  private loadInitialData(): void {

    const data = localStorage.getItem(this.STORAGE_KEY);

    if (data){
        this.chamadosSimulados = JSON.parse(data);
    } else {
        this.chamadosSimulados = this.getMockData();
        this.saveToLocalStorage();
    }
    
    this.chamadosSubject.next(this.chamadosSimulados);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.chamadosSimulados));
  }

  private getMockData(): Chamado[] {
    return[
      { id: 1, titulo: 'Impressora não funciona', descricao: 'A impressora HP no 3º andar não liga.', categoria: 'Hardware' },
      { id: 2, titulo: 'Erro de Login ERP', descricao: 'Ao tentar acessar o sistema X, recebo erro.', categoria: 'Software' }
    ];
  }

  addChamado(novoChamado: Omit<Chamado, 'id'>): Observable<Chamado> {
    const novoId = this.chamadosSimulados.length + 1;
    const chamadoCompleto: Chamado = {
        ...novoChamado,
        id: novoId
    };

    this.chamadosSimulados.push(chamadoCompleto);

    this.saveToLocalStorage();

    this.chamadosSubject.next(this.chamadosSimulados)

    return of(chamadoCompleto);
  }
}