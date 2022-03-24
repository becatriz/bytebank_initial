import { Transferencia } from './../models/transferencia.models'
import { TransferenciaService } from './../services/transferencia.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  public valor: number
  public destino: string | number

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  public transferir(): void {
    const valorTranferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    }

    this.service.adicionar(valorTranferencia).subscribe({
      next: res => {
        this.limpar()
        this.router.navigateByUrl('extrato')
      },
      error: err => {
        console.error(err)
      },
    })
  }

  public limpar() {
    this.valor = 0
    this.destino = ''
  }
}
