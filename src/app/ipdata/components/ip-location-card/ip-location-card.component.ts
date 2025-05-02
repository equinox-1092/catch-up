import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import { IpLocation } from '../../model/ip-location/ip-location.model';
import { IpLocationService } from '../../services/ip-location.service';

@Component({
  selector: 'app-ip-location-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    MatCardModule,
  ],
  providers: [IpLocationService],
  templateUrl: './ip-location-card.component.html',
  styleUrl: './ip-location-card.component.css'
})
export class IpLocationCardComponent {
  showFlag = false;
  @Input() ipLocation!: IpLocation;

  constructor(private ipLocationService: IpLocationService) {}

  ngOnInit(): void {
    if (this.ipLocation && !this.ipLocation.continent_name) {
      this.ipLocationService.lookup(this.ipLocation.ip).subscribe({
        next: (locationData: IpLocation) => {
          Object.assign(this.ipLocation, locationData);
        },
        error: (error: Error) => {
          console.error('Error fetching location data', error);
        }
      });
    }
  }
}
