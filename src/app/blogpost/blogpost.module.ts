import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogFeatureComponent } from './blog-feature/blog-feature.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports:[
    BlogFeatureComponent
  ],
  declarations: [BlogFeatureComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent],

})
export class BlogpostModule { }
