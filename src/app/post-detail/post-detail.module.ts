import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
    declarations: [ PostDetailComponent ],
    imports: [
        CommonModule,
        PostDetailRoutingModule,
        MatBadgeModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ]
})
export class PostDetailModule { }
