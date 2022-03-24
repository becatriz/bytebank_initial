import { Transferencia } from './../models/transferencia.models'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDeTransferencias: Array<Transferencia> = []
  private url: string = 'http://localhost:3000/transferencias'
  private ehSucessoTransferencia: boolean = false

  constructor(private httpClient: HttpClient) {
    this.listaDeTransferencias = []
  }

  get transferencias(): Transferencia[] {
    return this.listaDeTransferencias
  }

  public todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  public adicionar(tranferencia: Transferencia): Observable<Transferencia> {
    this.formatar(tranferencia)
    return this.httpClient.post<Transferencia>(this.url, tranferencia)
  }

  private formatar(tranferencia: Transferencia): void {
    tranferencia.data = new Date()
  }
}
