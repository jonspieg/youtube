import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { SpinningRodComponent } from './spinning-rod/spinning-rod.component';
import { WavePendulumComponent } from './wave-pendulum/wave-pendulum.component';

// Define the routes
const ROUTES = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'rod',
    component: SpinningRodComponent
  },
  {
    path: 'palindrome',
    component: PalindromeComponent
  },
  {
    path: 'wave',
    component: WavePendulumComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PalindromeComponent,
    SpinningRodComponent,
    WavePendulumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
