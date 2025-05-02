import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavigationBarComponent } from './public/components/side-navigation-bar/side-navigation-bar.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import { IpLocationCardComponent } from './ipdata/components/ip-location-card/ip-location-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IpLocationCardComponent,
    SideNavigationBarComponent,
    FooterContentComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Open Location Data';
  ipAddresses: string[] = [];

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  addIpAddress(ipAddress: string) {
    if (ipAddress && !this.ipAddresses.includes(ipAddress)) {
      this.ipAddresses.push(ipAddress);
    }
  }
}
