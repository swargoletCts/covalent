import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'td-skeleton-text',
  styleUrls: ['./skeleton-text.component.scss'],
  templateUrl: './skeleton-text.component.html',
  host: {
    'class.st-animated': '!animated',
  }
})
export class TdSkeletonTextComponent {

  @Input() styles: any = {};
  @Input() animated: boolean = true;

  @HostBinding

}
