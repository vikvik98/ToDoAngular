import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { TAREFAS } from './mock-tarefas';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private messageService: MessageService) { }

  getTarefas(): Observable<Tarefa[]>{
    this.messageService.add('TarefaService: fetched tarefas');
    return of(TAREFAS);
  }

  getTarefa(id : number): Observable<Tarefa>{
    return of(TAREFAS.find(tarefa => tarefa.id === id ));

  }

}
