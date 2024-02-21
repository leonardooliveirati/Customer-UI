import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; // URL da API do servidor backend

  constructor(private http: HttpClient) { }

  // Método para buscar todos os clientes
  getClientes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para buscar um cliente pelo ID
  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para cadastrar um novo cliente
  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  // Método para atualizar os dados de um cliente
  atualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }

  // Método para remover um cliente
  removerCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
