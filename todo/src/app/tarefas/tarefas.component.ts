import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import {TAREFAS} from '../mock-tarefas';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[];

 

  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas);
  }

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }

  

}
