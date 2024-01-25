import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

Amplify.configure(awsmobile);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
