import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewViewComponent } from './pages/overview-view/overview-view.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { ButtonShowcaseComponent } from './components/button-showcase/button-showcase.component';
import { ContentShowcaseComponent } from './components/content-showcase/content-showcase.component';
import { FormShowcaseComponent } from './components/form-showcase/form-showcase.component';
import { HeroShowcaseComponent } from './components/hero-showcase/hero-showcase.component';
import { TypographyShowcaseComponent } from './components/typography-showcase/typography-showcase.component';

@NgModule({
  declarations: [
    OverviewViewComponent,
    ButtonShowcaseComponent,
    ContentShowcaseComponent,
    FormShowcaseComponent,
    HeroShowcaseComponent,
    TypographyShowcaseComponent
  ], imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule {}
