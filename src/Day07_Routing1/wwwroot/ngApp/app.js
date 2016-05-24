var App;
(function (App) {
    angular.module('MyApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // $stateProvider lets you configure multiple states
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'ngApp/views/home.html',
            controller: App.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: 'ngApp/views/about.html',
            controller: App.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('products', {
            url: '/products',
            templateUrl: 'ngApp/views/products.html',
            controller: App.Controllers.ProductsController,
            controllerAs: 'controller'
        })
            .state('productDetails', {
            url: '/products/:id',
            templateUrl: 'ngApp/views/productDetails.html',
            controller: App.Controllers.ProductDetailsController,
            controllerAs: 'controller'
        });
        // Set the default state if the router cant find one.
        $urlRouterProvider.otherwise('/');
        // Enable html5 mode for clean route (no # symbol)
        $locationProvider.html5Mode(true);
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map