import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js'

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss']
})
export class VideoChatComponent implements OnInit {

  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    Pusher.logToConsole = true;

    const pusher = new Pusher('fbef0f0d48a061eecd03', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('users.1');
    channel.bind('message', data => {
      this.messages.push(data);
    });

  }

  
  submit ():void {
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: this.messages
    })
    // .subscribe(next: () => this.message = '');
    
  }


}
