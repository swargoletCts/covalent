import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'td-loading-mask',
  styleUrls: ['./loading-mask.component.scss'],
  templateUrl: './loading-mask.component.html',
})
export class TdLoadingMaskComponent {

  @HostBinding('style.borderRadius') @Input() borderRadius: string = '0';
  @HostBinding('style.width') @Input() width: string = '110px';
  @HostBinding('style.height') @Input() height: string = 'auto';

  @HostBinding('class.st-animated') @Input() animated: boolean = true;
}
