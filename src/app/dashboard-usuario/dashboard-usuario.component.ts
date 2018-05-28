import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'ca-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
  modalActions = new EventEmitter<string|MaterializeAction>();

  modalParams = [
    {
      dismissible: false,
      complete: function() { console.log('Closed'); }
    }
  ];

  reembolsos: any[] = [
    {
      descricao: 'Visita3',
      status: 'waiting',
      valor: '312,00',
      categoria: {
        id: '4',
        nome: 'Outros'
      },
      usuario: 'Felipe',
      data: '10/10/2008'
    },
    {
      descricao: 'Almoço',
      status: 'approved',
      valor: '215,00',
      categoria: {
        id: '2',
        nome: 'Alimentação'
      },
      usuario: 'Willian',
      data: '10/10/2008'
    },
    {
      descricao: 'Hotel',
      status: 'canceled',
      valor: '312,00',
      categoria: {
        id: '1',
        nome: 'Hospedagem'
      },
      usuario: 'Kauan',
      data: '10/10/2008'
    },
    {
      descricao: 'Uber',
      status: 'canceled',
      valor: '40,00',
      categoria: {
        id: '3',
        nome: 'Transporte'
      },
      usuario: 'Bruno',
      data: '10/10/2008'
    }
  ];

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
  }

  openModal() {
    this.modalActions.emit( {action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  public showSidenav(): void {
    this.sidenavParams = ['show'];
    this.sidenavActions.emit('sideNav');
  }

  ngOnInit() {
  }

}
