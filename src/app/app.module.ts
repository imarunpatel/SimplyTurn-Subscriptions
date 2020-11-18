import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './pages/error/error.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SubscriptionsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ErrorComponent,
    ThankYouComponent,
    TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
