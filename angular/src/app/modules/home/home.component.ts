import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
  }

  ngOnInit(): void {

    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 14.0.6 and bootstrap 5.1.3' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });

  }

}
