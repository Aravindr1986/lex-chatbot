import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { Interactions } from '@aws-amplify/interactions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aws-demo-chatbot';
  conversation: string = '';
  message: string='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async startChat() {
    // Provide a bot name and user input
    
    this.conversation = this.conversation + "\nYou::" + this.message;
    try{
      var response = await Interactions.send({botName: "lexbotdemo", message:this.message});
         console.log("Here")
    // Log chatbot response
    console.log("Response : "+response);

    this.message = '';

    if (response ){//&& response.message) {
      this.conversation = this.conversation + "\nBot::" + response;
    }

    if (response ) {
      this.conversation = this.conversation + "\nBot::" + "Your Hotel Room Booking is complete.";
    }
    }catch(error){console.log("error:"+ error)}
    
  }
}
