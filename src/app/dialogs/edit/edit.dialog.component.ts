import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Contact, ContactsEntity, ContactService} from '../../services/contact.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public contactService: ContactService) {
    this.contact = data.contact;
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  contact: ContactsEntity;
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    // emppty stuff
  }
  stopEdit(): void {
    this.contactService.updateContact(this.contact);
  }
}
