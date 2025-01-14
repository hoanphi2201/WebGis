import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'header-storage',
  template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.d-block]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageComponent {
  constructor(private modalSrv: NzModalService, private messageSrv: NzMessageService) {}

  @HostListener('click')
  _click() {
    this.modalSrv.confirm({
      nzTitle: 'Make sure clear all local storage?',
      nzOnOk: () => {
        localStorage.clear();
        this.messageSrv.success('Clear Finished!');
      }
    });
  }
}
