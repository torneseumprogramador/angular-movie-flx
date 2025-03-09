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

  availableCategories: Category[] = [];
  availableServices: Service[] = [];
  isLoading: boolean = true;

  selectedCategoryId: number = 0;
  selectedServiceId: number = 0;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadServices();
  }

  loadCategories() {
    this.movieService.getAllCategories().subscribe({
      next: (categories) => {
        this.availableCategories = categories;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar categorias. Por favor, tente novamente.';
        this.isLoading = false;
        console.error('Erro ao carregar categorias:', error);
      }
    });
  }

  loadServices() {
    this.movieService.getAllStreamServices().subscribe({
      next: (services) => {
        this.availableServices = services;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar serviços de streaming. Por favor, tente novamente.';
        this.isLoading = false;
        console.error('Erro ao carregar serviços:', error);
      }
    });
  }

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
