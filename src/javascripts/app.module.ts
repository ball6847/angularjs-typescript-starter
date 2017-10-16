declare var $: any
declare var PREFIX: string

import { NgModule } from 'ng-metadata/core'
import 'angular-ui-router'

const prefixProvider = {
  provide: "PREFIX",
  useValue: PREFIX || '',
}

// -------------------------------------------------------------------

@NgModule({
  imports: [
    'ui.router',
  ],
  providers: [
    prefixProvider,
  ],
})
export class AppModule { }
