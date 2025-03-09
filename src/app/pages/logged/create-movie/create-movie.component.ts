import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie, Category, Service } from '../../../interfaces/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit {
  movie: Omit<Movie, 'id'> = {
    title: '',
    description: '',
    releaseDate: '',
    rating: 0,
    categories: [],
    services: []
  };

  availableCategories: Category[] = [
    { id: 1, name: 'Ação' },
    { id: 2, name: 'Comédia' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Ficção Científica' },
    { id: 5, name: 'Terror' }
  ];

  availableServices: Service[] = [
    { id: 1, name: 'Netflix' },
    { id: 2, name: 'Prime Video' },
    { id: 3, name: 'Disney+' },
    { id: 4, name: 'HBO Max' },
    { id: 5, name: 'Globoplay' }
  ];

  selectedCategoryId: number = 0;
  selectedServiceId: number = 0;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() { }

  onSubmit() {
    if (this.selectedCategoryId) {
      const selectedCategory = this.availableCategories.find(cat => cat.id === this.selectedCategoryId);
      if (selectedCategory) {
        this.movie.categories = [selectedCategory];
      }
    }
    
    if (this.selectedServiceId) {
      const selectedService = this.availableServices.find(serv => serv.id === this.selectedServiceId);
      if (selectedService) {
        this.movie.services = [selectedService];
      }
    }

    this.movieService.createMovie(this.movie).subscribe({
      next: () => {
        this.successMessage = 'Filme cadastrado com sucesso!';
        // Redirecionar para a lista de filmes após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = error.error || 'Erro ao cadastrar filme. Tente novamente.';
      }
    });
  }
}
