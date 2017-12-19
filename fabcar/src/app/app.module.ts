import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CartableComponent } from './components/cartable/cartable.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './services/car.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CartableComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
