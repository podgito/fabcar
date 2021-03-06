import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CartableComponent } from './components/cartable/cartable.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './services/car.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { CarHistoryComponent } from './components/car-history/car-history.component';
import { CarHistoryService } from './services/car-history.service';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AddCarService } from './services/add-car.service';
import { AddOwnerService } from './services/add-owner.service';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';

const appRoutes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'car/:key', component: CarHistoryComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'addOwner/:key', component: AddOwnerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CartableComponent,
    CarsComponent,
    CarHistoryComponent,
    AddCarComponent,
    AddOwnerComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [CarService, CarHistoryService, AddCarService, AddOwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
