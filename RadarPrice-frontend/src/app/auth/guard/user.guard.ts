import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated()
  ? true
  : inject(Router).createUrlTree(['/login']);
};
