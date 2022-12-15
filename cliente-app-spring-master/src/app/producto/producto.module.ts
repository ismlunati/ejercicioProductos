import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoMainComponent } from './producto-main/producto-main.component';
import { AppRoutingModule } from '../routes/app-routing.module';



@NgModule({
  declarations: [
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent

  ]
})
export class ProductoModule { }
