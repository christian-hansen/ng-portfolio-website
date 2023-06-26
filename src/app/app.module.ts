import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { SectionIconsComponent } from './section-icons/section-icons.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioItemBoxComponent } from './portfolio-item-box/portfolio-item-box.component';
import { SuccessMessageComponent } from './contact-form/success-message/success-message.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionTitleComponent,
    SectionAboutComponent,
    SectionSkillsComponent,
    SectionPortfolioComponent,
    SectionContactComponent,
    FooterComponent,
    HeaderMobileComponent,
    SectionIconsComponent,
    PortfolioItemComponent,
    ContactFormComponent,
    PortfolioItemBoxComponent,
    SuccessMessageComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
