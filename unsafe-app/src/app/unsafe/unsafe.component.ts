import { Component, OnInit } from '@angular/core';
import { UnsafeService } from './unsafe.service';

@Component({
  selector: 'app-unsafe',
  templateUrl: './unsafe.component.html',
  styleUrls: ['./unsafe.component.scss']
})
export class UnsafeComponent {

  trustedHtml$ = this.service.trustUnsafeHtml();

  constructor(
    private readonly service: UnsafeService
  ) { }

}
