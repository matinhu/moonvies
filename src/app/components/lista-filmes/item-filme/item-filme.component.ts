import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-item-filme',
  templateUrl: './item-filme.component.html',
  styleUrls: ['./item-filme.component.scss'],
})
export class ItemFilmeComponent implements OnInit, OnChanges {
  public imgPath: string = 'https://image.tmdb.org/t/p/w500';
  @Input() filme: any = {};
  @Input() full: boolean = false;
  @Input() horizontal: boolean = false;
  @ViewChild('customSpinner', { static: false }) customSpinner!: MatSpinner;
  @ViewChild('customSpinnerBackground', { static: false })
  customSpinnerBackground!: MatSpinner;
  public isMobile: boolean = false;
  public deviceInfo: any = {};
  public deviceType: any;

  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    this.deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  }
  ngOnInit(): void {}
  ngOnChanges() {
    if (this.filme.vote_average) {
      let votos: string = this.filme.vote_average.toString();
      votos = votos.replace('.', '');
      if (votos.length == 1) {
        votos = votos + '0';
      }
      this.filme.vote_average = Number(votos);
    }
  }

  getColor() {}
}
