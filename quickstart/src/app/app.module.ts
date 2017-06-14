import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentAreaComponent} from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { AboutComponent } from './about/app.aboutComponent';
@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    {path: '',
                      component: ContentAreaComponent

                  },
                    {path: 'about',
                      component: AboutComponent

                    }
                    ])],
  declarations: [ AppComponent,
                  HeaderComponent,
                  NavComponent,
                  ContentAreaComponent,
                  FooterComponent,
                  AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
