var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams) {
                this.$stateParams = $stateParams;
                this.products = [
                    { id: 1, name: 'Milk', price: 5.00 },
                    { id: 2, name: 'Cheese', price: 17.00 },
                    { id: 3, name: 'Apples', price: 3.40 }
                ];
                var productId = $stateParams['id'];
                // Using filter method
                var filteredProducts = this.products.filter(function (element) {
                    return element.id == productId;
                });
                this.product = filteredProducts[0];
                // Using for loop
                //for (let i = 0; i < this.products.length; i++) {
                //    if (this.products[i].id == productId) {
                //        this.product = this.products[i];
                //    }
                //}
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=productDetailsController.js.map