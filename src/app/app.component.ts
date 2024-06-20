import { Component} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login/login.service';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterOutlet, RouterLink, RouterLinkActive,CommonModule,AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'candy shop';
  user = "";

  constructor(authService : LoginService){

    authService.isAuthenticated().subscribe(data =>{
      this.user = data;
      console.log(this.user);
    })

  }


}
