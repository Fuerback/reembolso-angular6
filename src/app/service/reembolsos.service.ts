export class ReembolsosService {
  constructor() {}

  reem: any[] = [
    {
      descricao: 'Visita',
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

  cat: any[] = [
    {
      id: '1',
      nome: 'Hospedagem'
    },
    {
      id: '2',
      nome: 'Alimentação'
    },
    {
      id: '3',
      nome: 'Transporte'
    },
    {
      id: '4',
      nome: 'Outros'
    }
  ];

  reembolsos(): any[] {
    return this.reem;
  }

  categorias(): any[] {
    return this.cat;
  }

  setReembolso(): void {
    this.reem.push({
      descricao: 'Uber 2',
      status: 'waiting',
      valor: '10,00',
      categoria: {
        id: '3',
        nome: 'Transporte'
      },
      usuario: 'Felipe F',
      data: '29/05/2018'
    });
  }
}
