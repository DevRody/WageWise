import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
