import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotfiPortfoliomoduleRoutingModule } from './lotfi-portfoliomodule-routing.module';
import { LotfiPortfoliomoduleComponent } from './lotfi-portfoliomodule.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';


@NgModule({
  declarations: [
    LotfiPortfoliomoduleComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LotfiPortfoliomoduleRoutingModule,
    
  ]
})
export class LotfiPortfoliomoduleModule { }
