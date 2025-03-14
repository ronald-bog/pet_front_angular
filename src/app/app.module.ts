import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContacComponent } from './components/contac/contac.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TypesComponent } from './components/types/types.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    HomeComponent,
    RegisterComponent,
    CatalogComponent,
    ContacComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SpinnerComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
