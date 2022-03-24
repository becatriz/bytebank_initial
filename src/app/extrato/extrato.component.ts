import { Transferencia } from './../models/transferencia.models'
import { TransferenciaService } from './../services/transferencia.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  public transferencias: Array<Transferencia> = []

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias
    })
  }
}
