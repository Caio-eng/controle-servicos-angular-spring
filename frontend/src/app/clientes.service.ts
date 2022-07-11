import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) { }

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente(): Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = "hash";
    cliente.cpf = "88888888";
    return cliente;
  }
}
