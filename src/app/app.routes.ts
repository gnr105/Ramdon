import { Routes } from '@angular/router';
import { Punto1Component } from './puntos/punto1/punto1.component';
import { Punto2Component } from './puntos/punto2/punto2.component';
import { Punto3Component } from './puntos/punto3/punto3.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "punto1",
        component: Punto1Component
    },
    {
        path: "punto2",
        component: Punto2Component
    },
    {
        path: "punto3",
        component: Punto3Component
    }
];
