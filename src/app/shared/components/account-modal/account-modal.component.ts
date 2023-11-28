import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountModalComponent {
  constructor(public dialogRef: MatDialogRef<AccountModalComponent>) {}

  handleModal(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
