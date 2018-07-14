import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule, NativeScriptHttpModule } from 'nativescript-angular';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule {
}
