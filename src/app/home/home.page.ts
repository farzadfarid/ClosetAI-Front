import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
   imports: [IonTitle, IonToolbar, IonHeader, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class HomePage {
 constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
