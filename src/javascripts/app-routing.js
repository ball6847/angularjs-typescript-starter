
provideState.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']

export function provideState($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('')

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      template: '<app-home></app-home>',
    })
    .state({
      name: 'about',
      url: '/about',
      template: '<app-about></app-about>',
    })

  $urlRouterProvider.otherwise("/");
}
