import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/authGuard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements IDeactivateComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';
  isSubmitted: boolean = false;

  OnSubmit() {
    this.isSubmitted = true;
  }
  canExit() {
    if (
      (this.firstName || this.lastName || this.message) &&
      !this.isSubmitted
    ) {
      return confirm(
        'Do you really want to navigate away?? You have unsaved fields'
      );
    } else {
      return true;
    }
  }
}
