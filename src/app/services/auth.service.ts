import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserResponse, UserRegister } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(user: User): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${this.apiUrl}/auth/login`, user);
    }

    register(user: UserRegister): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${this.apiUrl}/auth/register`, user);
    }

    validateToken(): Observable<boolean> {
        const token = this.getToken();
        
        if (!token) {
            return of(false);
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.head(`${this.apiUrl}/auth/validate`, { headers, observe: 'response' })
            .pipe(
                map(response => response.status === 200),
                catchError(() => of(false))
            );
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    logout(): void {
        localStorage.removeItem('token');
    }
} 