import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent{
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  inputData = {inputName: '', inputEmail: '', inputMessage: ''}

  //Validators
  nameValidationWarn = false;
  emailValidationWarn = false;
  messageValidationWarn = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.setFormFieldsState(
      nameField,
      emailField,
      messageField,
      sendButton,
      true
    );

    //Animation anzeigen

    let formData = new FormData();
    this.appendFormData(formData, nameField, emailField, messageField);

    //senden

    await fetch(
      'https://christian-hansen.developerakademie.net/testmail/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData,
      }
    );

    //Text anzeigen "Nachricht gesendet"
    this.setFormFieldsState(
      nameField,
      emailField,
      messageField,
      sendButton,
      false
    );
  }

  setFormFieldsState(
    nameField: HTMLSelectElement,
    emailField: HTMLSelectElement,
    messageField: HTMLSelectElement,
    sendButton: HTMLSelectElement,
    state: boolean
  ) {
    nameField.disabled = state;
    emailField.disabled = state;
    messageField.disabled = state;
    sendButton.disabled = state;
  }

  appendFormData(
    formData: FormData,
    nameField: HTMLSelectElement,
    emailField: HTMLSelectElement,
    messageField: HTMLSelectElement
  ) {
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
  }

  validateFormInput() {
    this.nameValidationWarn = true;
    this.emailValidationWarn = true;
    this.messageValidationWarn = true;
  }
}
