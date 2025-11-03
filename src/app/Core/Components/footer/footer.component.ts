import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { home, settings } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class FooterComponent  implements OnInit {

  constructor( private router: Router) {
    addIcons({ home, settings });
   }

  ngOnInit() {}

    homePage() {
    this.router.navigateByUrl('/home');
  }

    goSettingPage() {
    this.router.navigateByUrl('/settings');
  }

}
