declare var $: any
declare var PREFIX: string

import { NgModule } from 'ng-metadata/core'
import { provideState } from './app-routing'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NavComponent } from './nav/nav.component'
import { AboutComponent } from './about/about.component'

const prefixProvider = {
  provide: "PREFIX",
  useValue: PREFIX || '',
}

@NgModule({
  imports: [
    'ui.router',
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
  ],
  providers: [
    provideState,
    prefixProvider,
  ],
})
export class AppModule { }
