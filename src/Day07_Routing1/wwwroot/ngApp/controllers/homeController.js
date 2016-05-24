var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = "Hello from the homeController";
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=homeController.js.map