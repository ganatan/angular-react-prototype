import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  exports: [
    ExampleComponent
  ],
  declarations: [
    ExampleComponent
  ],
  providers: [
  ],
})
export class ExampleModule { }