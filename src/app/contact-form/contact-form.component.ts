import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

async sendMail() {
  
  console.log("Sent mail", this.myForm);

  let nameField = this.nameField.nativeElement;
  let emailField = this.emailField.nativeElement;
  let messageField = this.messageField.nativeElement;
  let sendButton =  this.sendButton.nativeElement;

  nameField.disabled = true;
  emailField.disabled = true;
  messageField.disabled = true;
  sendButton.disabled = true;

  //Animation anzeigen

let formData = new FormData()
formData.append('name', nameField.value);
formData.append('email', emailField.value);
formData.append('message', messageField.value);

  //senden 

  await fetch('https://christian-hansen.developerakademie.net/testmail/send_mail/send_mail.php', {
    method: 'POST',
    body: formData
})

//Text anzeigen "Nachricht gesendet"
  nameField.disabled = false;
  emailField.disabled = false;
  messageField.disabled = false;
  sendButton.disabled = false;
}

}
