import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
 
})
export class ClienteCadastroComponent implements OnInit {
    [x: string]: any;
  clienteForm!: FormGroup;
    clienteService: any;

  ngOnInit(): void {
    this.clienteForm = this['fb'].group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, this.validateCpf]],
      dataNascimento: ['', [Validators.required, this.validateIdade]],
      rendaMensal: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dataCadastro: ['', [Validators.required]]
    });
  }

  validateIdade(control: { value: string | number | Date; }) {
    const dataNascimento = new Date(control.value);
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();
    if (idade < 18 || idade >= 60) {
      return { idadeInvalida: true };
    }
    return null;
  }

  validateCpf(control: { value: any; }) {
    const cpf = control.value;
    if (!cpf) return null;
   
    return null;
  }

  cadastrarCliente() {
    if (this.clienteForm.valid) {
      // Submeta os dados para o serviço de cliente
      this.clienteService.cadastrarCliente(this.clienteForm.value).subscribe(
        (response: any) => {
          console.log('Cliente cadastrado com sucesso:', response);
          // Limpe o formulário após o cadastro bem-sucedido
          this.clienteForm.reset();
        },
        (error: any) => {
          console.error('Erro ao cadastrar cliente:', error);
        }
      );
    } else {
      // Marque os campos inválidos no formulário
      this.clienteForm.markAllAsTouched();
    }
  }
}
