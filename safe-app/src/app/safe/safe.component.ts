import { Component, OnInit } from '@angular/core';
import { SafeService } from './safe.service';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent {
  constructor(
    private readonly service: SafeService
  ) {
    this.service.login();
  }
}
