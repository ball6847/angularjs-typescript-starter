declare var $: any
declare var PREFIX: string

import { NgModule } from 'ng-metadata/core'
import 'angular-ui-router'
import { AppComponent } from './app.component'


const prefixProvider = {
  provide: "PREFIX",
  useValue: PREFIX || '',
}

// -------------------------------------------------------------------

@NgModule({
  imports: [
    'ui.router',
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    prefixProvider,
  ],
})
export class AppModule { }
