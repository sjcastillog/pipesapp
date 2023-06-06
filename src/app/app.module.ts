import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';


//Configuracion del locale de la app
import localeEsEc from '@angular/common/locales/es-EC';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsEc)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { 
      provide:LOCALE_ID, 
      useValue:'es-EC',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
