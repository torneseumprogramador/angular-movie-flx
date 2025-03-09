import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/logged/header/header.component';
import { CardComponent } from '../../../components/logged/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { Service } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}

  movies: Movie[] = [];
  loading: boolean = true;
  error: string = '';
  
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    this.error = '';

    this.movieService.getAllMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erro ao carregar os filmes. Por favor, tente novamente mais tarde.';
        this.loading = false;
        console.error('Erro ao carregar filmes:', error);
      }
    });
  }

  // TODO: Teria que vir do modelo e pedir para o backend
  providerLogo(services: Service[]): string {
    if (services.length > 0) {
      return `/images/patners/${services[0].name}.png`;
    }
    return '/images/patners/netflix.png';
  }

  // TODO: Teria que vir do modelo e pedir para o backend
  getApprovalRating(rating: number): number {
    return Math.round(rating * 10);
  }

  // TODO: Teria que vir do modelo e pedir para o backend
  duration(): string {
    const hours = Math.floor(Math.random() * 3) + 1;
    const minutes = Math.floor(Math.random() * 60);
    return `${hours}h ${minutes}m`;
  }

  // TODO: Teria que vir do modelo e pedir para o backend
  ageRating(): string {
    const ratings = ['+10', '+12', '+14', '+16', '+18'];
    return ratings[Math.floor(Math.random() * ratings.length)];
  }

  // TODO: Teria que vir do modelo e pedir para o backend
  isTop10(): boolean {
    return Math.random() < 0.5;
  }
}

