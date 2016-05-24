var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController() {
                this.products = [
                    { id: 1, name: 'Milk', price: 5.00 },
                    { id: 2, name: 'Cheese', price: 17.00 },
                    { id: 3, name: 'Apples', price: 3.40 }
                ];
            }
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=productsController.js.map