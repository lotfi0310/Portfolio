import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotfiPortfoliomoduleComponent } from './lotfi-portfoliomodule.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [{ path: '', component: LotfiPortfoliomoduleComponent
}] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotfiPortfoliomoduleRoutingModule { }
