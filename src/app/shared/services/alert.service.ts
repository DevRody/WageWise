import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) { }

  openAlert(message: string, snackbarType: 'success' | 'error', duration = 7000) {
    this.snackBar.open(message, '', {
      duration,
      verticalPosition: 'top',
      panelClass: snackbarType
    });
  }

}
