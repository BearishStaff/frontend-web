import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { FormGetComponent } from './components/form-get/form-get.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPostComponent,
    FormGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
