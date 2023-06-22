import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('contactForm') formRef!: NgForm;
  inputData = { inputName: '', inputEmail: '', inputMessage: '' };
showSuccess: boolean = false;
  async sendMailData() {
  
    let formData = new FormData();
    this.appendFormData(formData, this.inputData);

    await fetch(
      'https://christian-hansen.developerakademie.net/testmail/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData,
      }
    );

  }

  appendFormDatas(
    formData: FormData,
    nameField: string,
    emailField: string,
    messageField: string
  ) {
    formData.append('name', nameField);
    formData.append('email', emailField);
    formData.append('message', messageField);
  }

  appendFormData(formData: FormData, inputData: any) {
    formData.append('name', inputData.inputName);
    formData.append('email', inputData.inputEmail);
    formData.append('message', inputData.inputMessage);
  }

  async sendMail() {
    //Animation anzeigen
    console.log(
      'Message to send:','\n',
      this.inputData.inputName,'\n',
      this.inputData.inputEmail,'\n',
      this.inputData.inputMessage
    );
    //senden
    await this.sendMailData();
    this.showSuccess = true;

    //TODO 
    setTimeout(() => {
      this.showSuccess = false
    }, 5000);
    //Reset
    this.formRef.resetForm();
    //Text anzeigen "Nachricht gesendet"
  }
}