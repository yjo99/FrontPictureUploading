import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BaseModule } from './modules/base/base.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,

  ],
  imports: [
    

    AuthModule,
    BaseModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
