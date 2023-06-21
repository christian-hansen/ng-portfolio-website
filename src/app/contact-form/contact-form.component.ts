import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  inputData = { inputName: '', inputEmail: '', inputMessage: '' };

  async sendMail() {
    //Animation anzeigen

    let formData = new FormData();
    this.appendFormData(formData, this.inputData);

    //senden

    await fetch(
      'https://christian-hansen.developerakademie.net/testmail/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData,
      }
    );

    //Text anzeigen "Nachricht gesendet"
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

  logMail() {
    console.log(
      'Message to send:','\n',
      this.inputData.inputName,'\n',
      this.inputData.inputEmail,'\n',
      this.inputData.inputMessage
    );
    this.sendMail();
  }
}
