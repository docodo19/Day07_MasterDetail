namespace App.Controllers {

    export class ProductsController {

        public products;

        constructor() {
            this.products = [
                { id: 1, name: 'Milk', price: 5.00 },
                { id: 2, name: 'Cheese', price: 17.00 },
                { id: 3, name: 'Apples', price: 3.40 }
            ];
        }
    }
}

