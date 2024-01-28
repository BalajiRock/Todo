import { Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

export const routes: Routes = [
    { path:'About', component: AboutComponent },
    { path:''   , component: TodosComponent  }
];
