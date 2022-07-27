import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;

  constructor(
    private router: Router
  ) { }

  onSubmit(){
    this.router.navigate(['/home'])
  }

  preparaCadastrar(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadasro() {
    this.cadastrando = false;
  }

}
