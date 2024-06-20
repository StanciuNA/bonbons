import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
