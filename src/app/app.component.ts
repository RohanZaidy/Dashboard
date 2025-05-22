import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  sidebaropen = false;

  toggleSidebar()
  {
    this.sidebaropen = !this.sidebaropen
  }

  impnote()
  {
    alert("This app is not responsive made only for Pc")
  }
}