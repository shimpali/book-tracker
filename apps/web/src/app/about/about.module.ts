import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@book-tracker/material';
import { TranslateModule } from '@ngx-translate/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent],
})
export class AboutModule {}
