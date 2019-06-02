import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TarefaService }  from '../tarefa.service';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})
export class TarefaDetailComponent implements OnInit {

  tarefa : Tarefa;

  constructor(
  private route: ActivatedRoute,
  private tarefaService: TarefaService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getTarefa();
  }

  getTarefa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.getTarefa(id)
      .subscribe(tarefa => this.tarefa = tarefa);
  }

  goBack(): void {
    this.location.back();
  }

}
