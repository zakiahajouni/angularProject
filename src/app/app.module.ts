import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorsComponent } from './motors/motors.component';
import { AddMotorsComponent } from './add-motors/add-motors.component';
import { FormsModule } from '@angular/forms';
import { UpdateMotorsComponent } from './update-motors/update-motors.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RechercheParTypesComponent } from './recherche-par-types/recherche-par-types.component';
import { RechercheParNameComponent } from './recherche-par-name/recherche-par-name.component';
import { UpdateTypeComponent } from './update-type/update-type.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorsComponent,
    AddMotorsComponent,
    UpdateMotorsComponent,
    LoginComponent,
    ForbiddenComponent,
    ListeTypesComponent,
    RechercheParTypesComponent,
    RechercheParNameComponent,
    UpdateTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
    
    providers: [],
    bootstrap: [AppComponent],
    

})
export class AppModule { }
