import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ng';
  constructor(private _freeApiService: freeApiService) {

  }

  lstcomments:Comments[];

  ngOnInit() {
    this._freeApiService.getcomments().subscribe(
      data=> {
        this.lstcomments = data;
      }
    );

  }
}
