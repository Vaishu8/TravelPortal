import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { BannerComponent } from './banner/banner.component';
import { MenubarComponent } from './menubar/menubar.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { WeatherComponent } from './weather/weather.component';
import { DestinationComponent } from './destination/destination.component';
import { PromoContentComponent } from './promo-content/promo-content.component';
import { QuoteComponent } from './quote/quote.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    BannerComponent,
    MenubarComponent,
    WelcomeContentComponent,
    WeatherComponent,
    DestinationComponent,
    PromoContentComponent,
    QuoteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
