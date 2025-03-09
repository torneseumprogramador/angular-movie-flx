import { Routes } from '@angular/router';
import { LoginComponent } from './pages/not-logged/home/login.component';
import { HomeComponent } from './pages/logged/home/home.component';
import { RegistrationComponent } from './pages/not-logged/registration/registration.component';
import { CreateMovieComponent } from './pages/logged/create-movie/create-movie.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'novo-filme',
    component: CreateMovieComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastre-se',
    component: RegistrationComponent
  }
];
