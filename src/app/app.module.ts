import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// cambiar a locale la app
import localeES from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    // date-locale para usarlo de forma predetermina lo agregamos aca:
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
