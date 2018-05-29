import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { ReembolsosService } from '../service/reembolsos.service';

@Component({
  selector: 'ca-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
  modalActions = new EventEmitter<string|MaterializeAction>();

  modalParams = [
    {
      dismissible: false
    }
  ];

  categorias: any[];

  reembolsos: any[];

  reembolso: any;

  constructor(private reembolsoService: ReembolsosService) {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
  }

  openModal(reembo: any) {
    this.reembolso = reembo;
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
    this.reembolsos = this.reembolsoService.reembolsos();
    this.categorias = this.reembolsoService.categorias();
  }

}
