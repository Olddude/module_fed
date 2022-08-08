import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsafeComponent } from './unsafe.component';
import { UnsafeRoutingModule } from './unsafe-routing.module';
import { UnsafeService } from './unsafe.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UnsafeComponent
  ],
  imports: [
    CommonModule,
    UnsafeRoutingModule,
    HttpClientModule
  ],
  providers: [
    UnsafeService
  ]
})
export class UnsafeModule { }
