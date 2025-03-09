import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, Category, Service } from '../interfaces/movie.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiUrl}/flix/movie`);
    }

    getMovieById(id: number): Observable<Movie> {
        return this.http.get<Movie>(`${this.apiUrl}/flix/movie/${id}`);
    }

    createMovie(movie: Omit<Movie, 'id'>): Observable<Movie> {
        return this.http.post<Movie>(`${this.apiUrl}/flix/movie`, movie);
    }

    updateMovie(id: number, movie: Partial<Movie>): Observable<Movie> {
        return this.http.put<Movie>(`${this.apiUrl}/flix/movie/${id}`, movie);
    }

    deleteMovie(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/flix/movie/${id}`);
    }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiUrl}/flix/category`);
    }

    getAllStreamServices(): Observable<Service[]> {
        return this.http.get<Service[]>(`${this.apiUrl}/flix/stream-service`);
    }
} 