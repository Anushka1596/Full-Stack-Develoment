import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {CommonModule} from '@angular/common';
import {PostService} from './posts/post.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatCardModule, MatButtonModule,
    MatToolbarModule, MatExpansionModule, CommonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
