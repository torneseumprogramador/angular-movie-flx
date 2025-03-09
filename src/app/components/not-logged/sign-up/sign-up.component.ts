import { Component, ViewChild } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { UserRegister } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @ViewChild('registerForm') registerForm!: NgForm;

  user: UserRegister = {
    name: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';
  sucessMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        this.sucessMessage = 'Cadastro realizado com sucesso!';
        this.errorMessage = '';
        
        // Reseta o formulário sem disparar validações
        this.registerForm.resetForm();
        
        // Redireciona para o login após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = error.error;
        this.sucessMessage = '';
      }
    });
  }
}
