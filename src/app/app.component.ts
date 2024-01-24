// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private amplifyService: AmplifyService) {}

  ngOnInit() {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      console.log(user);
    }).catch(err => console.log(err));
  }
}
