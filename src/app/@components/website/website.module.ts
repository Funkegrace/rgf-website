import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InvestmentServicesComponent } from './about-us/investment-services/investment-services.component';
import { JoinUsComponent } from './about-us/join-us/join-us.component';
import { LandingComponent } from './about-us/landing/landing.component';
import { NumbersComponent } from './about-us/numbers/numbers.component';
import { OurMissionComponent } from './about-us/our-mission/our-mission.component';
import { OurStoryComponent } from './about-us/our-story/our-story.component';
import { OurTeamComponent } from './about-us/our-team/our-team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeLandingComponent } from './home/home-landing/home-landing.component';
import { LoanComponent } from './home/loan/loan.component';
import { CreatingWealthComponent } from './home/creating-wealth/creating-wealth.component';
import { FinancialFreedomComponent } from './home/financial-freedom/financial-freedom.component';
import { LeveragingTechnologyComponent } from './home/leveraging-technology/leveraging-technology.component';
import { WeGuaranteeComponent } from './home/we-guarantee/we-guarantee.component';
import { CustomersFeedbackComponent } from './home/customers-feedback/customers-feedback.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FiguresComponent } from './home/figures/figures.component';
import { EmailSubscriptionComponent } from './home/email-subscription/email-subscription.component';
import { SwiperModule } from 'swiper/angular';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LandingComponent,
    OurStoryComponent,
    OurTeamComponent,
    OurMissionComponent,
    InvestmentServicesComponent,
    JoinUsComponent,
    NumbersComponent,
    WebsiteComponent,
    HomeLandingComponent,
    LoanComponent,
    CreatingWealthComponent,
    FinancialFreedomComponent,
    LeveragingTechnologyComponent,
    WeGuaranteeComponent,
    CustomersFeedbackComponent,
    FiguresComponent,
    EmailSubscriptionComponent,
    AboutUsComponent,
  ],

  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
})
export class WebsiteModule {}
