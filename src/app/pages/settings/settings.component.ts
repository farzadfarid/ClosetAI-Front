import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonBackButton, IonContent, IonList, IonItem, IonLabel, IonToggle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { bagHandleOutline, chevronForwardOutline, helpCircleOutline, homeOutline, logOutOutline } from 'ionicons/icons';
import { FooterComponent } from "src/app/Core/Components/footer/footer.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [ IonLabel, IonItem, IonContent, IonTitle, IonIcon, IonButton, IonButtons, IonToolbar, IonHeader],
})
export class SettingsComponent  implements OnInit {

  constructor() { 
    addIcons({helpCircleOutline,homeOutline,chevronForwardOutline,bagHandleOutline,logOutOutline});
  }

  ngOnInit() {}

}
