import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.validateToken().pipe(
        take(1),
        map(isValid => {
            if (!isValid) {
                router.navigate(['/login']);
                return false;
            }
            return true;
        })
    );
}; 