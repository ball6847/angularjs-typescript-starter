declare var PRODUCTION: boolean

import 'angular'
import 'angular-ui-router'
import './polyfills'
import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic'
import { enableProdMode } from 'ng-metadata/core'
import { AppModule } from './app.module'

// node env variable (available with Webpack)
if (PRODUCTION) {
  enableProdMode()
} 

platformBrowserDynamic().bootstrapModule(AppModule)
