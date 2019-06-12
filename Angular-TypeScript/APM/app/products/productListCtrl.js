var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = /** @class */ (function () {
            function ProductListCtrl() {
                this.title = "Product List";
                this.showImage = false;
                this.products = [
                    {
                        productId: 1,
                        productName: "Leaf Rake",
                        productCode: "GDN-0011",
                        releaseDate: new Date(2009, 2, 19),
                        description: "Leaf rake with 48-inch wooden handle.",
                        price: 19.95,
                        imageUrl: "https://cdn.shopify.com/s/files/1/0596/9309/products/Leaf-Rake-20-tine-by-Sneeboer-z-2_1200x1200.jpg?v=1521139700"
                    },
                    {
                        productId: 2,
                        productName: "Garden Cart",
                        productCode: "GDN-0023",
                        releaseDate: new Date(2010, 2, 18),
                        description: "15 gallon capacity rolling garden cart",
                        price: 32.99,
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5lRjw4TabdcHU8ibGtQ5jN_R6eM0vOg6hYZcRsAqQGFiUvNg"
                    },
                    {
                        productId: 5,
                        productName: "Hammer",
                        productCode: "TBX-0048",
                        releaseDate: new Date(2013, 4, 21),
                        description: "Curved claw steel hammer",
                        price: 8.99,
                        imageUrl: "https://www.woodblocx.co.uk/media/catalog/product/cache/1/thumbnail/960x/05e17a266b0e9cc26fb81a2e0bed7e78/l/u/lump-hammer.jpg"
                    }
                ];
                var newProduct = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95, "15-inch steel blade hand saw", "https://wickes.scene7.com/is/image/travisperkins/normal/Power-Saws-DeWalt-DCS391N-18V-XR-Li-ion-Cordless-Circular-Saw-Bare~GPID_1100281026_00?$ratio43$");
                newProduct.price = newProduct.calculateDiscount(10);
                this.products.push(newProduct);
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            return ProductListCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
