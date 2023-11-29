import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);

  let info = authService.decodeToken();

  if (authService.isAuthenticated()) {
    if (info?.role === Role.ADMIN) {
      router.navigate(['/listagem-funcionarios']);
    } else {
      router.navigate([`/usuario/${info.employeeId}`]);
    }
  }

  return !authService.isAuthenticated();
};

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
