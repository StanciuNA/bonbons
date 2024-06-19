import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    { path: '', component:HomepageComponent },
    { path: 'login', component: LoginComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'news', component: NewsComponent },
];
