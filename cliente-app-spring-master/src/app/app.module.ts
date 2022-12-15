import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ClienteModule } from './cliente/cliente.module';
import { WebMainModule } from './web-main/web-main.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductoComponent } from './producto/producto.component';
import { ProductoModule } from './producto/producto.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClienteModule,
    WebMainModule,
    UsuarioModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
