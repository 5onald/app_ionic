import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,
    IonMenuToggle,
    RouterLink
  ],
})
export class HomePage {
  constructor() {}
}