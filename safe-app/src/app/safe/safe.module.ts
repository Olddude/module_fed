import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeComponent } from './safe.component';
import { LoginRoutingModule } from './safe-routing.module';
import { SafeService } from './safe.service';



@NgModule({
  declarations: [
    SafeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    SafeService,
    {
      provide: Storage,
      useValue: localStorage
    }
  ]
})
export class SafeModule { }
