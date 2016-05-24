var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var AboutController = (function () {
            function AboutController() {
                this.message = "Hello from the aboutController!";
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=aboutController.js.map