import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { TokenParams } from './classes/TokenParams';
import { AuthService } from './auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ng';
  tokenParam: TokenParams;
  email:string;
  password:string;

  constructor(private _freeApiService: freeApiService, private authService: AuthService) {

  }

  doLogin(): void {
    console.log('Inside doLigin method');
    this.authService.login(this.email, this.password)
    .subscribe(

        data =>
          {
            this.tokenParam = data;
            this.authService.AccessToken = this.tokenParam["auth-token"];

          }

    );
  }

  lstcomments:Comments[];
  displayToken:string;

  ngOnInit() {
    this._freeApiService.getcomments().subscribe(
      data=> {
        this.lstcomments = data;
      }
    );

    this.displayToken = this.authService.AccessToken;
    console.log('display token', this.displayToken);

  }
}
