import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

@Component({
  selector: 'ns-form',
  moduleId: module.id,
  templateUrl: './form.component.html',
})
export class FormComponent {
  public recipient: string;
  public subject: string;
  public message: string;

  private mailgunUrl: string = 'MAILGUN_URL_HERE';
  private apiKey: string = 'BASE64_API_KEY_HERE';

  public constructor (private http: HttpClient) {
  }

  private get headers () {
    return new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + this.apiKey
      }
    );
  }

  public send () {
    if (this.recipient && this.subject && this.message) {
      this.http.post(
        'https://api.mailgun.net/v3/' + this.mailgunUrl + '/messages',
        'from=test@example.com&to=' + this.recipient + '&subject=' + this.subject + '&text=' + this.message,
        { headers: this.headers }
      )
        .map(result => JSON.stringify(result))
        .do(result => console.log('RESULT: ', JSON.stringify(result)))
        .subscribe(result => {
          console.log('SENT!', result);
          this.recipient = '';
          this.subject = '';
          this.message = '';
        }, error => {
          console.log(error);
        });
    }
  }
}
