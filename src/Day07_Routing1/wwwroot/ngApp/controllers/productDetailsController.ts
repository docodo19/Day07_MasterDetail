namespace App.Controllers {

    export class ProductDetailsController {
        public products = [
            { id: 1, name: 'Milk', price: 5.00 },
            { id: 2, name: 'Cheese', price: 17.00 },
            { id: 3, name: 'Apples', price: 3.40 }
        ];

        public product;
        
        constructor(private $stateParams:ng.ui.IStateParamsService) {
            let productId = $stateParams['id'];

            // Using filter method
            let filteredProducts = this.products.filter((element) => {
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

    }
}