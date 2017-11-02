System.register("Ajax", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APIService;
    return {
        setters: [],
        execute: function () {
            APIService = class APIService {
                constructor() {
                    this.url = "http://localhost/courses_typescript/vendor_products/API/";
                }
                // design patern singleton
                static getService() {
                    if (!APIService.instance) {
                        APIService.instance = new APIService();
                    }
                    return APIService.instance;
                }
                ;
                getWines() {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "wines",
                            dataType: "json",
                            success: function (wines) {
                                resolve(wines);
                            },
                            error: function (wines) {
                                reject(wines);
                            }
                        });
                    });
                }
                getVendors() {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vendors",
                            dataType: "json",
                            success: function (vendors) {
                                resolve(vendors);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                }
                postVendorWines(vendorId, wineId) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vendorWine",
                            method: "POST",
                            dataType: "json",
                            data: {
                                vendorId: vendorId,
                                wineId: wineId
                            },
                            success: function (wines) {
                                resolve(wines);
                            },
                            error: function (wines) {
                                reject(wines);
                            }
                        });
                    });
                }
                deleteVendorWines(vendorId, wineId) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "deleteWineToVendor/" + vendorId + "/" + wineId,
                            method: "DELETE",
                            dataType: "json",
                            success: function (wines) {
                                resolve(wines);
                            },
                            error: function (wines) {
                                reject(wines);
                            }
                        });
                    });
                }
            };
            APIService.instance = null;
            exports_1("APIService", APIService);
        }
    };
});
System.register("Wine", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Wine;
    return {
        setters: [],
        execute: function () {
            Wine = class Wine {
                constructor(name, color, year, designation, id, categoryId) {
                    this.id = id;
                    this.name = name;
                    this.color = color;
                    this.year = year;
                    this.designation = designation;
                    this.categoryId = categoryId;
                }
                display($parent, iterator) {
                    let div = '<div class="item ' + this.color + '" id="w' + this.id + '" data-position="' + iterator + '" draggable="true" title="' + this.designation + '" >';
                    div += '<span>' + this.name + '</span></br>';
                    div += '<span>' + this.year + '</span><br />';
                    div += '</div>';
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_2("Wine", Wine);
        }
    };
});
System.register("Category", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Category;
    return {
        setters: [],
        execute: function () {
            Category = class Category {
                constructor(id, name) {
                    this.id = id;
                    this.name = name;
                }
                display($parent) {
                    let div = '<div id="' + this.name + '" class="block container"></div>';
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_3("Category", Category);
        }
    };
});
System.register("Vendor", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Vendor;
    return {
        setters: [],
        execute: function () {
            Vendor = class Vendor {
                constructor(name, id, products) {
                    this.id = id;
                    this.name = name;
                    this.products = products;
                }
                displayButtons($parent) {
                    let button = '<button id="v' + this.id + '" class ="vendorButton" >' + this.name.charAt(0).toUpperCase() + this.name.slice(1) + '</button>';
                    this.$dom = $(button);
                    $parent.append(this.$dom);
                }
                displayVendorSpace($parent) {
                    let div = '<div id="vendor-v' + this.id + '" class="container vendor ' + this.name + '">';
                    div += '<h2>' + this.name.charAt(0).toUpperCase() + this.name.slice(1) + '</h2>';
                    div += '<div class="vendorWine">';
                    div += '</div>';
                    div += '</div>';
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_4("Vendor", Vendor);
        }
    };
});
System.register("BddVendors", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var BddVendors;
    return {
        setters: [],
        execute: function () {
            exports_5("BddVendors", BddVendors = [
                {
                    id: 1,
                    name: "paul",
                    products: [2, 4, 6, 7]
                },
                {
                    id: 2,
                    name: "pierre",
                    products: [1, 2, 4, 6]
                },
                {
                    id: 3,
                    name: "francois",
                    products: [1, 3, 4, 7]
                },
                {
                    id: 4,
                    name: "fred",
                    products: [1, 3, 5, 6]
                }
            ]);
        }
    };
});
System.register("BddCategory", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var BddCategory;
    return {
        setters: [],
        execute: function () {
            exports_6("BddCategory", BddCategory = [
                {
                    id: 1,
                    name: "red",
                },
                {
                    id: 2,
                    name: "pink"
                },
                {
                    id: 3,
                    name: "white"
                }
            ]);
        }
    };
});
System.register("App", ["Wine", "Category", "Vendor", "BddCategory", "Ajax"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Wine_1, Category_1, Vendor_1, BddCategory_1, Ajax_1, App;
    return {
        setters: [
            function (Wine_1_1) {
                Wine_1 = Wine_1_1;
            },
            function (Category_1_1) {
                Category_1 = Category_1_1;
            },
            function (Vendor_1_1) {
                Vendor_1 = Vendor_1_1;
            },
            function (BddCategory_1_1) {
                BddCategory_1 = BddCategory_1_1;
            },
            function (Ajax_1_1) {
                Ajax_1 = Ajax_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    // structural elements
                    this.wines = [];
                    this.vendors = [];
                    this.vendorWines = {};
                    this.catergory = [];
                    this.tempArray = [];
                    this.tempArray1 = [];
                    // dom elements
                    this.$nav = $("#nav");
                    this.$vendors = $("#vendors");
                    this.$wines = $("#wines");
                    // functions
                    this.init();
                }
                init() {
                    this.initCategory();
                    this.initWhine();
                    this.initVendor();
                }
                ;
                initWhine() {
                    let i = 0;
                    var api = Ajax_1.APIService.getService();
                    let products = api.getWines();
                    products
                        .then((products) => {
                        for (let wine of products) {
                            // console.log(products);
                            // console.log(wine);
                            let vin = new Wine_1.Wine(wine.name, wine.color, wine.year, wine.designation, wine.id, wine.categoryId);
                            this.wines.push(vin);
                            let color = wine.color;
                            vin.display($("#" + color), i);
                            i++;
                        }
                    })
                        .catch((error) => {
                        // console.log( error );
                    });
                }
                initVendor() {
                    var api = Ajax_1.APIService.getService();
                    var status = api.getVendors();
                    status
                        .then((vendors) => {
                        for (let vendor of vendors) {
                            let vendeur = new Vendor_1.Vendor(vendor.name, vendor.id, vendor.products);
                            this.vendors.push(vendeur);
                            vendeur.displayButtons(this.$nav);
                            vendeur.displayVendorSpace(this.$vendors);
                            this.vendorWines[vendeur.id] = [];
                        }
                    })
                        .catch((error) => {
                        // console.log("err");
                        // console.log( error );
                    });
                }
                initCategory() {
                    let iterator = 0;
                    for (let category of BddCategory_1.BddCategory) {
                        let newCategory = new Category_1.Category(category.id, category.name);
                        this.catergory.push(newCategory);
                        newCategory.display(this.$wines);
                        iterator++;
                    }
                    var vHeight = 100 / iterator;
                    this.$wines.children().css("height", vHeight + "%");
                }
                assignWineToVendor(vendorId, whineId) {
                    let vendorid = this.extractId(vendorId);
                    let wineid = this.extractId(whineId);
                    this.vendors[vendorid - 1].products.push(wineid);
                    var api = Ajax_1.APIService.getService();
                    var status = api.postVendorWines(vendorid, wineid);
                    status
                        .then((products) => {
                        // console.log("ici");
                        // console.log(products);
                    })
                        .catch((error) => {
                        // console.log("err");
                        // console.log( error );
                    });
                }
                deleteWhineToVendor(vendorId, whineId) {
                    let vendorid = this.extractId(vendorId);
                    let wineid = this.extractId(whineId);
                    let index = this.vendors[vendorid - 1].products.indexOf(String(wineid));
                    if (index > -1) {
                        this.vendors[vendorid - 1].products.splice(index, 1);
                        // console.log("here");
                        var api = Ajax_1.APIService.getService();
                        var status = api.deleteVendorWines(vendorid, wineid);
                        status
                            .then((products) => {
                            // console.log("ici");
                            // console.log(products);
                        })
                            .catch((error) => {
                            // console.log("err");
                            // console.log( error );
                        });
                    }
                    // console.log(this.vendors[0].products);
                }
                extractId(stringId) {
                    return parseInt(stringId.slice(-1));
                }
                initWinesOfVendor(vendorid) {
                    let vendorId = this.extractId(vendorid);
                    for (let vendor of this.vendors) {
                        if (vendor.id == vendorId) {
                            for (let objWine of this.wines) {
                                // console.log(wine);
                                let vendu = false;
                                let i = 0;
                                let color = objWine.color;
                                for (let wine of vendor.products) {
                                    if (wine == objWine.id) {
                                        vendu = true;
                                    }
                                    i++;
                                }
                                if (vendu == true) {
                                    objWine.postVendorWines;
                                    objWine.display($("#vendor-v" + vendorId), i);
                                }
                                else {
                                    objWine.display($("#" + color), i);
                                }
                            }
                            break;
                        }
                    }
                    // console.log(this.vendors[0].products);
                }
            };
            exports_7("App", App);
        }
    };
});
System.register("BddWine", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var BddWine;
    return {
        setters: [],
        execute: function () {
            exports_8("BddWine", BddWine = [
                {
                    id: 1,
                    name: "les marguerites",
                    color: "white",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 3
                },
                {
                    id: 2,
                    name: 'les lilas',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 3,
                    name: 'mimosas',
                    color: "pink",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 2
                },
                {
                    id: 4,
                    name: 'les charues',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 5,
                    name: 'la rosée du matin',
                    color: "pink",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 2
                },
                {
                    id: 6,
                    name: 'gris des sables',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 7,
                    name: 'rivesalte maury',
                    color: "white",
                    year: 2007,
                    designation: "aoc muscat de rivesaltes",
                    categoryId: 3
                }
            ]);
        }
    };
});
System.register("main", ["App"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var App_1, app;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            app = new App_1.App();
            $(document).on("dragover", ".container", function (event) {
                event.preventDefault();
            });
            $(document).on("dragstart", ".item", function (event) {
                const dragEvent = event.originalEvent;
                dragEvent.dataTransfer.setData("id", $(this).attr("id"));
                dragEvent.dataTransfer.setData("parentId", $(this).parent().attr("id"));
            });
            $(document).on('drop', ".container", function (event) {
                const dragEvent = event.originalEvent;
                const id = dragEvent.dataTransfer.getData("id");
                const $element = $("#" + id);
                const containerId = $(this).attr("id");
                // console.log($(this));
                if ($(this).hasClass("vendor")) {
                    $(this).append($element);
                    app.assignWineToVendor(containerId, $element.attr("id"));
                }
                else if ($element.hasClass(containerId)) {
                    $(this).append($element);
                    const vendorId = dragEvent.dataTransfer.getData("parentId");
                    if ($("#" + vendorId).hasClass("vendor")) {
                        app.deleteWhineToVendor(vendorId, $element.attr("id"));
                    }
                }
            });
            $(document).on("click", ".vendorButton", function (event) {
                $(".vendor").hide();
                let thisWorkspaceId = "#vendor-" + $(this).attr("id");
                $(thisWorkspaceId).html("");
                $("#red").html("");
                $("#pink").html("");
                $("#white").html("");
                app.initWinesOfVendor($(this).attr("id"));
                $(thisWorkspaceId).show();
            });
            // var elements: Promise <number[]> = new Promise( function( resolve, reject ){
            // 	$.ajax({
            // 		success: function( data ){
            // 		},
            // 		error: function( error ){
            // 		}
            // 	})
            // })
            // elements
            // 	.then( function( data ){
            // 		for( let item of data ){
            // 			// console.log( item );
            // 		}
            // 	})
            // 	.catch(function(error){
            // 	});
        }
    };
});
System.register("Model", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Model;
    return {
        setters: [],
        execute: function () {
            Model = class Model {
                constructor(id) {
                    this.id = id;
                }
                getId() {
                    return this.id;
                }
            };
            exports_10("Model", Model);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0FqYXgudHMiLCJUUy9XaW5lLnRzIiwiVFMvQ2F0ZWdvcnkudHMiLCJUUy9WZW5kb3IudHMiLCJUUy9CZGRWZW5kb3JzLnRzIiwiVFMvQmRkQ2F0ZWdvcnkudHMiLCJUUy9BcHAudHMiLCJUUy9CZGRXaW5lLnRzIiwiVFMvbWFpbi50cyIsIlRTL01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFDQSxhQUFBO2dCQWNDO29CQVhRLFFBQUcsR0FBVywwREFBMEQsQ0FBQztnQkFXbkUsQ0FBQztnQkFUZiwwQkFBMEI7Z0JBQzFCLE1BQU0sQ0FBQyxVQUFVO29CQUVoQixFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUN4QixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ3hDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQzVCLENBQUM7Z0JBRWMsQ0FBQztnQkFFaEIsUUFBUTtvQkFFUCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUUsQ0FBQyxPQUFXLEVBQUcsTUFBVSxFQUFPLEVBQUU7d0JBRXJELENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTzs0QkFDdkIsUUFBUSxFQUFHLE1BQU07NEJBQ2pCLE9BQU8sRUFBRSxVQUFTLEtBQVM7Z0NBQzFCLE9BQU8sQ0FBRSxLQUFLLENBQUUsQ0FBQzs0QkFDbEIsQ0FBQzs0QkFDRCxLQUFLLEVBQUUsVUFBVSxLQUFRO2dDQUN4QixNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7NEJBQ2pCLENBQUM7eUJBRUQsQ0FBQyxDQUFBO29CQUNILENBQUMsQ0FBQyxDQUFBO2dCQUNILENBQUM7Z0JBRUQsVUFBVTtvQkFFVCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUUsQ0FBQyxPQUFXLEVBQUcsTUFBVSxFQUFPLEVBQUU7d0JB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LEVBQUUsQ0FBRSxDQUFDO2dCQUNoQyxDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFDO2dCQUN2QixDQUFDLENBQUUsT0FBTyxDQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFDO2dCQUN4QixDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFDO2dCQUV6QixHQUFHLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBRSxDQUFDO2dCQUMvQyxDQUFDLENBQUUsZUFBZSxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFN0IsQ0FBQyxDQUFDLENBQUE7WUFZRiwrRUFBK0U7WUFDL0UsWUFBWTtZQUNaLCtCQUErQjtZQUUvQixPQUFPO1lBQ1AsOEJBQThCO1lBRTlCLE1BQU07WUFDTixNQUFNO1lBQ04sS0FBSztZQUdMLFdBQVc7WUFDWCw0QkFBNEI7WUFDNUIsNkJBQTZCO1lBQzdCLDZCQUE2QjtZQUM3QixNQUFNO1lBQ04sTUFBTTtZQUNOLDJCQUEyQjtZQUUzQixPQUFPO1FBQ1AsQ0FBQzs7Ozs7Ozs7OztZQ2pHRCxRQUFBO2dCQUtDLFlBQWEsRUFBUztvQkFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxLQUFLO29CQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoQixDQUFDO2FBS0QsQ0FBQTs7UUFBQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEFQSVNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQVBJU2VydmljZSA9IG51bGw7XHJcblx0cHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdC9jb3Vyc2VzX3R5cGVzY3JpcHQvdmVuZG9yX3Byb2R1Y3RzL0FQSS9cIjtcclxuXHJcblx0Ly8gZGVzaWduIHBhdGVybiBzaW5nbGV0b25cclxuXHRzdGF0aWMgZ2V0U2VydmljZSgpOkFQSVNlcnZpY2Uge1xyXG5cclxuXHRcdGlmKCFBUElTZXJ2aWNlLmluc3RhbmNlKXtcclxuXHRcdFx0QVBJU2VydmljZS5pbnN0YW5jZSA9IG5ldyBBUElTZXJ2aWNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gQVBJU2VydmljZS5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcblx0Z2V0V2luZXMoKTogUHJvbWlzZSA8YW55PiB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZTphbnkgLCByZWplY3Q6YW55KTogYW55ID0+IHtcclxuXHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLnVybCArIFwid2luZXNcIixcclxuXHRcdFx0XHRkYXRhVHlwZSA6IFwianNvblwiLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHdpbmVzOiB7fSl7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCB3aW5lcyApOyBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiggd2luZXM6e30gKXtcclxuXHRcdFx0XHRcdHJlamVjdCggd2luZXMgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGdldFZlbmRvcnMoKTogUHJvbWlzZSA8YW55PiB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZTphbnkgLCByZWplY3Q6YW55KTogYW55ID0+IHtcclxuXHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLnVybCArIFwidmVuZG9yc1wiLFxyXG5cdFx0XHRcdGRhdGFUeXBlIDogXCJqc29uXCIsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24odmVuZG9yczoge30pe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSggdmVuZG9ycyApOyBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiggZXJyb3I6e30gKXtcclxuXHRcdFx0XHRcdHJlamVjdCggZXJyb3IgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHBvc3RWZW5kb3JXaW5lcyggdmVuZG9ySWQ6bnVtYmVyICwgd2luZUlkOm51bWJlciApOiBQcm9taXNlIDxhbnk+IHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlOmFueSAsIHJlamVjdDphbnkpOiBhbnkgPT4ge1xyXG5cclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMudXJsICsgXCJ2ZW5kb3JXaW5lXCIsXHJcblx0XHRcdFx0bWV0aG9kIDogXCJQT1NUXCIsXHJcblx0XHRcdFx0ZGF0YVR5cGUgOiBcImpzb25cIixcclxuXHRcdFx0XHRkYXRhIDoge1xyXG5cdFx0XHRcdFx0dmVuZG9ySWQgOiB2ZW5kb3JJZCxcclxuXHRcdFx0XHRcdHdpbmVJZCA6IHdpbmVJZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24od2luZXM6IHt9KXtcclxuXHRcdFx0XHRcdHJlc29sdmUoIHdpbmVzICk7IFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCB3aW5lczp7fSApe1xyXG5cdFx0XHRcdFx0cmVqZWN0KCB3aW5lcyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlVmVuZG9yV2luZXMoIHZlbmRvcklkOm51bWJlciAsIHdpbmVJZDpudW1iZXIgKTogUHJvbWlzZSA8YW55PiB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZTphbnkgLCByZWplY3Q6YW55KTogYW55ID0+IHtcclxuXHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLnVybCArIFwiZGVsZXRlV2luZVRvVmVuZG9yL1wiICsgdmVuZG9ySWQgKyBcIi9cIiArIHdpbmVJZCxcclxuXHRcdFx0XHRtZXRob2QgOiBcIkRFTEVURVwiLFxyXG5cdFx0XHRcdGRhdGFUeXBlIDogXCJqc29uXCIsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24od2luZXM6IHt9KXtcclxuXHRcdFx0XHRcdHJlc29sdmUoIHdpbmVzICk7IFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCB3aW5lczp7fSApe1xyXG5cdFx0XHRcdFx0cmVqZWN0KCB3aW5lcyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCJcclxuZXhwb3J0IGNsYXNzIFdpbmUge1xyXG5cdFxyXG5cdFxyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblx0cHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblx0cHVibGljIHllYXI6IG51bWJlcjtcclxuXHRwdWJsaWMgZGVzaWduYXRpb246IHN0cmluZztcclxuXHRwdWJsaWMgY2F0ZWdvcnlJZDogbnVtYmVyO1xyXG5cclxuXHRwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHJcblx0cHVibGljICRkb206IEpRdWVyeTxIVE1MRWxlbWVudD5cclxuXHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZywgeWVhcjpudW1iZXIsIGRlc2lnbmF0aW9uOiBzdHJpbmcsIGlkOiBudW1iZXIsIGNhdGVnb3J5SWQ6IG51bWJlciApe1xyXG5cclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XHJcblx0XHR0aGlzLnllYXIgPSB5ZWFyO1xyXG5cdFx0dGhpcy5kZXNpZ25hdGlvbiA9IGRlc2lnbmF0aW9uO1xyXG5cdFx0dGhpcy5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcclxuXHJcblx0fVxyXG5cclxuXHJcblx0ZGlzcGxheSggJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiAsIGl0ZXJhdG9yPzogbnVtYmVyICk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBkaXY6IHN0cmluZyA9ICc8ZGl2IGNsYXNzPVwiaXRlbSAnICsgdGhpcy5jb2xvciArICdcIiBpZD1cIncnICsgdGhpcy5pZCArICdcIiBkYXRhLXBvc2l0aW9uPVwiJyArIGl0ZXJhdG9yICsgJ1wiIGRyYWdnYWJsZT1cInRydWVcIiB0aXRsZT1cIicgKyB0aGlzLmRlc2lnbmF0aW9uICsgJ1wiID4nO1xyXG5cdFx0ZGl2ICs9ICc8c3Bhbj4nKyB0aGlzLm5hbWUgKyc8L3NwYW4+PC9icj4nO1xyXG5cdFx0ZGl2ICs9ICc8c3Bhbj4nKyB0aGlzLnllYXIgKyc8L3NwYW4+PGJyIC8+JztcclxuXHRcdGRpdiArPSAnPC9kaXY+JztcclxuXHJcblx0XHR0aGlzLiRkb20gPSAkKGRpdik7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoIHRoaXMuJGRvbSApO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5IHtcclxuXHRcclxuXHRwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cdHB1YmxpYyAkZG9tOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBpZDogbnVtYmVyICwgbmFtZTogc3RyaW5nKXtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG5cdH1cclxuXHJcblx0ZGlzcGxheSggICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKXtcclxuXHJcblx0XHRsZXQgZGl2OiBzdHJpbmcgPSAnPGRpdiBpZD1cIicgKyB0aGlzLm5hbWUgKyAnXCIgY2xhc3M9XCJibG9jayBjb250YWluZXJcIj48L2Rpdj4nO1xyXG5cdFx0XHJcblx0XHR0aGlzLiRkb20gPSAkKGRpdik7XHJcblx0XHJcblx0XHQkcGFyZW50LmFwcGVuZCggdGhpcy4kZG9tICk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVmVuZG9yIHtcclxuXHRcclxuXHRcclxuXHRcclxuXHRwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBwcm9kdWN0czogbnVtYmVyW107XHJcblxyXG5cdHB1YmxpYyAkZG9tOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcblx0XHJcblx0XHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgaWQ6bnVtYmVyICwgcHJvZHVjdHM6bnVtYmVyW10gKXtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5QnV0dG9ucyggJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiApOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgYnV0dG9uOiBzdHJpbmcgPSAnPGJ1dHRvbiBpZD1cInYnICsgdGhpcy5pZCArICdcIiBjbGFzcyA9XCJ2ZW5kb3JCdXR0b25cIiA+JyArIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKSArICc8L2J1dHRvbj4nO1xyXG5cdFxyXG5cdFx0dGhpcy4kZG9tID0gJChidXR0b24pO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCB0aGlzLiRkb20gKTtcclxuXHJcblx0fVxyXG5cclxuXHRkaXNwbGF5VmVuZG9yU3BhY2UoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKTp2b2lke1xyXG5cdFx0bGV0IGRpdjogc3RyaW5nID0gJzxkaXYgaWQ9XCJ2ZW5kb3ItdicgKyB0aGlzLmlkICsnXCIgY2xhc3M9XCJjb250YWluZXIgdmVuZG9yICcgKyB0aGlzLm5hbWUgKyAnXCI+JztcclxuXHRcdFx0ZGl2ICs9ICc8aDI+JyArIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKSArJzwvaDI+JztcclxuXHRcdFx0ZGl2ICs9ICc8ZGl2IGNsYXNzPVwidmVuZG9yV2luZVwiPic7XHJcblx0XHRcdGRpdiArPSAnPC9kaXY+JztcclxuXHRcdFx0ZGl2ICs9ICc8L2Rpdj4nO1xyXG5cdFx0XHJcblx0XHR0aGlzLiRkb20gPSAkKGRpdik7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoIHRoaXMuJGRvbSApO1xyXG5cdH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IEJkZFZlbmRvcnM6IHtcclxuXHRba2V5OiBzdHJpbmddIDogc3RyaW5nfG51bWJlcnxudW1iZXJbXVxyXG59W10gPSBbXHJcblx0e1xyXG5cdFx0aWQgOiAxLFxyXG5cdFx0bmFtZSA6IFwicGF1bFwiLFxyXG5cdFx0cHJvZHVjdHM6IFsyLDQsNiw3XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAyLFxyXG5cdFx0bmFtZSA6IFwicGllcnJlXCIsXHJcblx0XHRwcm9kdWN0czogWzEsMiw0LDZdXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDMsXHJcblx0XHRuYW1lIDogXCJmcmFuY29pc1wiLFxyXG5cdFx0cHJvZHVjdHM6IFsxLDMsNCw3XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA0LFxyXG5cdFx0bmFtZSA6IFwiZnJlZFwiLFxyXG5cdFx0cHJvZHVjdHM6IFsxLDMsNSw2XVxyXG5cdH1cclxuXTtcclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgQmRkQ2F0ZWdvcnk6IHtcclxuXHRba2V5OiBzdHJpbmddIDogc3RyaW5nfG51bWJlclxyXG59W10gPSBbXHJcblx0e1xyXG5cdFx0aWQgOiAxLFxyXG5cdFx0bmFtZSA6IFwicmVkXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDIsXHJcblx0XHRuYW1lIDogXCJwaW5rXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMyxcclxuXHRcdG5hbWUgOiBcIndoaXRlXCJcclxuXHR9XHJcbl07XHJcblxyXG4iLCJpbXBvcnQgeyBXaW5lIH0gZnJvbSBcIldpbmVcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSBcIlZlbmRvclwiO1xyXG4vLyBpbXBvcnQgeyBCZGRXaW5lIH0gZnJvbSBcIkJkZFdpbmVcIjtcclxuaW1wb3J0IHsgQmRkVmVuZG9ycyB9IGZyb20gXCJCZGRWZW5kb3JzXCI7XHJcbmltcG9ydCB7IEJkZENhdGVnb3J5IH0gZnJvbSBcIkJkZENhdGVnb3J5XCI7XHJcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tIFwiLi9BamF4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRwcml2YXRlIHdpbmVzOiB7IFtrZXk6c3RyaW5nXTogYW55IH1bXTtcclxuXHRwcml2YXRlIHZlbmRvcnM6IHsgW2tleTpzdHJpbmddOiBhbnkgfVtdO1xyXG5cdHByaXZhdGUgdmVuZG9yV2luZXM6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyW10gfTtcclxuXHRwcml2YXRlIGNhdGVyZ29yeToge31bXTtcclxuXHJcblx0cHJpdmF0ZSB0ZW1wQXJyYXk6IHt9W107XHJcblx0cHJpdmF0ZSB0ZW1wQXJyYXkxOiB7fVtdO1xyXG5cdFxyXG5cdHB1YmxpYyAkbmF2OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkdmVuZG9yQnV0dG9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkdmVuZG9yc3BhY2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblx0cHVibGljICR2ZW5kb3JzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkd2luZXM6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblx0XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdFxyXG5cdFx0Ly8gc3RydWN0dXJhbCBlbGVtZW50c1xyXG5cdFx0dGhpcy53aW5lcyA9IFtdO1xyXG5cdFx0dGhpcy52ZW5kb3JzID0gW107XHJcblx0XHR0aGlzLnZlbmRvcldpbmVzID0ge307XHJcblx0XHR0aGlzLmNhdGVyZ29yeSA9IFtdO1xyXG5cclxuXHRcdHRoaXMudGVtcEFycmF5ID0gW107XHJcblx0XHR0aGlzLnRlbXBBcnJheTEgPSBbXTtcclxuXHRcdFxyXG5cclxuXHJcblx0XHQvLyBkb20gZWxlbWVudHNcclxuXHRcdHRoaXMuJG5hdiA9ICQoIFwiI25hdlwiICk7XHJcblx0XHR0aGlzLiR2ZW5kb3JzID0gJCggXCIjdmVuZG9yc1wiKTtcclxuXHRcdHRoaXMuJHdpbmVzID0gJCggXCIjd2luZXNcIiApO1xyXG5cdFx0XHJcblx0XHQvLyBmdW5jdGlvbnNcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRpbml0KCk6IHZvaWQge1xyXG5cclxuXHRcdHRoaXMuaW5pdENhdGVnb3J5KCk7XHJcblxyXG5cdFx0dGhpcy5pbml0V2hpbmUoKTtcclxuXHJcblx0XHR0aGlzLmluaXRWZW5kb3IoKTtcclxuXHR9O1xyXG5cclxuXHJcblx0aW5pdFdoaW5lKCk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdHZhciBhcGk6QVBJU2VydmljZSA9IEFQSVNlcnZpY2UuZ2V0U2VydmljZSgpO1xyXG5cdFx0bGV0IHByb2R1Y3RzOlByb21pc2U8YW55PiA9IGFwaS5nZXRXaW5lcygpO1xyXG5cclxuXHRcdHByb2R1Y3RzXHJcblx0XHRcdC50aGVuKCAoIHByb2R1Y3RzICkgPT4ge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciggbGV0IHdpbmUgb2YgcHJvZHVjdHMgKXtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHdpbmUpO1xyXG5cdFx0XHRcdFx0bGV0IHZpbiA9IG5ldyBXaW5lKCB3aW5lLm5hbWUgYXMgc3RyaW5nLCB3aW5lLmNvbG9yIGFzIHN0cmluZywgd2luZS55ZWFyIGFzIG51bWJlciwgd2luZS5kZXNpZ25hdGlvbiBhcyBzdHJpbmcsIHdpbmUuaWQgYXMgbnVtYmVyLCB3aW5lLmNhdGVnb3J5SWQgYXMgbnVtYmVyKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0dGhpcy53aW5lcy5wdXNoKHZpbik7XHJcblx0XHRcdFx0XHRsZXQgY29sb3IgPSB3aW5lLmNvbG9yIGFzIHN0cmluZztcclxuXHRcdFxyXG5cdFx0XHRcdFx0dmluLmRpc3BsYXkoICQoIFwiI1wiK2NvbG9yICkgLCBpICk7XHJcblx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aSArKztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goIChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCBlcnJvciApO1xyXG5cdFx0XHR9IClcclxuXHR9XHJcblxyXG5cdGluaXRWZW5kb3IoKTogdm9pZCB7XHJcblxyXG5cdFx0dmFyIGFwaTpBUElTZXJ2aWNlID0gQVBJU2VydmljZS5nZXRTZXJ2aWNlKCk7XHJcblx0XHR2YXIgc3RhdHVzID0gYXBpLmdldFZlbmRvcnMoKTtcclxuXHJcblx0XHRzdGF0dXNcclxuXHRcdFx0LnRoZW4oICggdmVuZG9ycyApID0+IHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IoIGxldCB2ZW5kb3Igb2YgdmVuZG9ycyApe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgdmVuZGV1ciA9IG5ldyBWZW5kb3IoIHZlbmRvci5uYW1lIGFzIHN0cmluZywgdmVuZG9yLmlkIGFzIG51bWJlciwgdmVuZG9yLnByb2R1Y3RzIGFzIG51bWJlcltdKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy52ZW5kb3JzLnB1c2godmVuZGV1cik7XHJcblx0XHRcdFx0XHR2ZW5kZXVyLmRpc3BsYXlCdXR0b25zKCB0aGlzLiRuYXYgKTtcclxuXHRcdFx0XHRcdHZlbmRldXIuZGlzcGxheVZlbmRvclNwYWNlKCB0aGlzLiR2ZW5kb3JzICk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy52ZW5kb3JXaW5lc1t2ZW5kZXVyLmlkXSA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCggKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJlcnJcIik7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coIGVycm9yICk7XHJcblx0XHRcdH0gKVxyXG5cclxuXHR9XHJcblxyXG5cdGluaXRDYXRlZ29yeSgpOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgaXRlcmF0b3IgPSAwO1xyXG5cclxuXHRcdGZvciggbGV0IGNhdGVnb3J5IG9mIEJkZENhdGVnb3J5ICl7XHJcblx0XHRcdGxldCBuZXdDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShjYXRlZ29yeS5pZCBhcyBudW1iZXIsIGNhdGVnb3J5Lm5hbWUgYXMgc3RyaW5nKTtcclxuXHJcblx0XHRcdHRoaXMuY2F0ZXJnb3J5LnB1c2goIG5ld0NhdGVnb3J5ICk7XHJcblxyXG5cdFx0XHRuZXdDYXRlZ29yeS5kaXNwbGF5KCB0aGlzLiR3aW5lcyApO1xyXG5cclxuXHRcdFx0aXRlcmF0b3IgKys7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHZIZWlnaHQgPSAxMDAgLyBpdGVyYXRvcjtcclxuXHJcblx0XHR0aGlzLiR3aW5lcy5jaGlsZHJlbigpLmNzcyggXCJoZWlnaHRcIiwgdkhlaWdodCArXCIlXCIgKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHRhc3NpZ25XaW5lVG9WZW5kb3IoIHZlbmRvcklkOiBzdHJpbmcgLCB3aGluZUlkOiBzdHJpbmcgKTp2b2lkIHtcclxuXHJcblx0XHRsZXQgdmVuZG9yaWQ6IG51bWJlciA9IHRoaXMuZXh0cmFjdElkKCB2ZW5kb3JJZCApO1xyXG5cclxuXHRcdGxldCB3aW5laWQ6IG51bWJlciA9IHRoaXMuZXh0cmFjdElkKCB3aGluZUlkICk7XHJcblxyXG5cdFx0dGhpcy52ZW5kb3JzWyB2ZW5kb3JpZCAtIDEgXS5wcm9kdWN0cy5wdXNoKCB3aW5laWQgKTtcclxuXHJcblx0XHR2YXIgYXBpOkFQSVNlcnZpY2UgPSBBUElTZXJ2aWNlLmdldFNlcnZpY2UoKTtcclxuXHJcblx0XHR2YXIgc3RhdHVzID0gYXBpLnBvc3RWZW5kb3JXaW5lcyggdmVuZG9yaWQsIHdpbmVpZCApO1xyXG5cdFx0XHJcblx0XHRzdGF0dXNcclxuXHRcdFx0LnRoZW4oICggcHJvZHVjdHMgKSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJpY2lcIik7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImVyclwiKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyggZXJyb3IgKTtcclxuXHRcdFx0fSApXHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2hpbmVUb1ZlbmRvciggdmVuZG9ySWQ6IHN0cmluZyAsIHdoaW5lSWQ6IHN0cmluZyApOnZvaWQge1xyXG5cclxuXHRcdGxldCB2ZW5kb3JpZDogbnVtYmVyID0gdGhpcy5leHRyYWN0SWQoIHZlbmRvcklkICk7XHJcblx0XHRsZXQgd2luZWlkOiBudW1iZXIgPSB0aGlzLmV4dHJhY3RJZCggd2hpbmVJZCApO1xyXG5cclxuXHRcdGxldCBpbmRleCA9IHRoaXMudmVuZG9yc1sgdmVuZG9yaWQgLSAxIF0ucHJvZHVjdHMuaW5kZXhPZiggU3RyaW5nKHdpbmVpZCkgKTtcclxuXHRcdFxyXG5cdFx0aWYoIGluZGV4ID4gLTEgKXtcclxuXHRcdFx0dGhpcy52ZW5kb3JzWyB2ZW5kb3JpZCAtIDEgXS5wcm9kdWN0cy5zcGxpY2UoIGluZGV4ICwxICk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcblxyXG5cdFx0XHR2YXIgYXBpOkFQSVNlcnZpY2UgPSBBUElTZXJ2aWNlLmdldFNlcnZpY2UoKTtcclxuXHRcdFx0dmFyIHN0YXR1cyA9IGFwaS5kZWxldGVWZW5kb3JXaW5lcyggdmVuZG9yaWQsIHdpbmVpZCApO1xyXG5cdFx0XHRcclxuXHRcdFx0c3RhdHVzXHJcblx0XHRcdFx0LnRoZW4oICggcHJvZHVjdHMgKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImljaVwiKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCggKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImVyclwiKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCBlcnJvciApO1xyXG5cdFx0XHRcdH0gKVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmVuZG9yc1swXS5wcm9kdWN0cyk7XHJcblx0fVxyXG5cclxuXHRleHRyYWN0SWQoIHN0cmluZ0lkOnN0cmluZyApOiBudW1iZXJ7XHJcblx0XHRcclxuXHRcdHJldHVybiBwYXJzZUludCggc3RyaW5nSWQuc2xpY2UoLTEpICk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdFdpbmVzT2ZWZW5kb3IoIHZlbmRvcmlkOiBzdHJpbmcgKTp2b2lkIHtcclxuXHJcblxyXG5cdFx0bGV0IHZlbmRvcklkOiBudW1iZXIgPSB0aGlzLmV4dHJhY3RJZCggdmVuZG9yaWQgKTtcclxuXHRcdFxyXG5cdFx0Zm9yKCBsZXQgdmVuZG9yIG9mIHRoaXMudmVuZG9ycyApe1xyXG5cclxuXHRcdFx0aWYoIHZlbmRvci5pZCA9PSB2ZW5kb3JJZCApe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciggbGV0IG9ialdpbmUgb2YgdGhpcy53aW5lcyApe1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cod2luZSk7XHJcblx0XHRcdFx0XHRsZXQgdmVuZHUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdGxldCBjb2xvciA9IG9ialdpbmUuY29sb3I7XHJcblxyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgd2luZSBvZiB2ZW5kb3IucHJvZHVjdHMgKXtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCB3aW5lID09IG9ialdpbmUuaWQgKXtcclxuXHRcdFx0XHRcdFx0XHR2ZW5kdSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKCB2ZW5kdSA9PSB0cnVlICl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvYmpXaW5lLnBvc3RWZW5kb3JXaW5lc1xyXG5cdFx0XHRcdFx0XHRvYmpXaW5lLmRpc3BsYXkoICQoIFwiI3ZlbmRvci12XCIrdmVuZG9ySWQgKSAsIGkgKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRvYmpXaW5lLmRpc3BsYXkoICQoIFwiI1wiK2NvbG9yICkgLCBpICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnZlbmRvcnNbMF0ucHJvZHVjdHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IEJkZFdpbmU6IHtcclxuXHRba2V5OiBzdHJpbmddIDogc3RyaW5nfG51bWJlclxyXG59W10gPSBbXHJcblx0e1xyXG5cdFx0aWQgOiAxLFxyXG5cdFx0bmFtZSA6IFwibGVzIG1hcmd1ZXJpdGVzXCIsXHJcblx0XHRjb2xvciA6IFwid2hpdGVcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogM1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAyLFxyXG5cdFx0bmFtZSA6ICdsZXMgbGlsYXMnICxcclxuXHRcdGNvbG9yIDogXCJyZWRcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogMVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAzLFxyXG5cdFx0bmFtZSA6ICdtaW1vc2FzJyxcclxuXHRcdGNvbG9yIDogXCJwaW5rXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogNCxcclxuXHRcdG5hbWUgOiAnbGVzIGNoYXJ1ZXMnLFxyXG5cdFx0Y29sb3IgOiBcInJlZFwiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAxXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDUsXHJcblx0XHRuYW1lIDogJ2xhIHJvc8OpZSBkdSBtYXRpbicsXHJcblx0XHRjb2xvciA6IFwicGlua1wiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAyXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDYsXHJcblx0XHRuYW1lIDogJ2dyaXMgZGVzIHNhYmxlcycsXHJcblx0XHRjb2xvciA6IFwicmVkXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDFcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogNyxcclxuXHRcdG5hbWUgOiAncml2ZXNhbHRlIG1hdXJ5JyxcclxuXHRcdGNvbG9yIDogXCJ3aGl0ZVwiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9jIG11c2NhdCBkZSByaXZlc2FsdGVzXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogM1xyXG5cdH1cclxuXVxyXG5cclxuXHJcbiIsImltcG9ydCB7QXBwfSBmcm9tIFwiQXBwXCI7XHJcblxyXG52YXIgYXBwID0gbmV3IEFwcCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoIGRvY3VtZW50ICkub24oIFwiZHJhZ292ZXJcIiwgXCIuY29udGFpbmVyXCIsIGZ1bmN0aW9uKCBldmVudCApe1xyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0gKTtcclxuXHJcbiQoIGRvY3VtZW50ICkub24oIFwiZHJhZ3N0YXJ0XCIsIFwiLml0ZW1cIiwgZnVuY3Rpb24oIGV2ZW50ICl7XHJcblx0XHJcblx0Y29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IGFzIERyYWdFdmVudDtcclxuXHRcclxuXHRkcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIFwiaWRcIiwgJCh0aGlzKS5hdHRyKFwiaWRcIikgKTtcclxuXHRkcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIFwicGFyZW50SWRcIiwgJCggdGhpcyApLnBhcmVudCgpLmF0dHIoXCJpZFwiKSApO1xyXG59KTtcclxuXHJcbiQoIGRvY3VtZW50ICkub24oICdkcm9wJywgXCIuY29udGFpbmVyXCIsIGZ1bmN0aW9uKCBldmVudCApe1xyXG5cclxuXHRjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgYXMgRHJhZ0V2ZW50O1xyXG5cdGNvbnN0IGlkOnN0cmluZyA9IGRyYWdFdmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggXCJpZFwiICk7XHJcblxyXG5cdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKCBcIiNcIitpZCApO1xyXG5cdFxyXG5cdGNvbnN0IGNvbnRhaW5lcklkOnN0cmluZyA9ICQodGhpcykuYXR0ciggXCJpZFwiICk7XHJcblx0Ly8gY29uc29sZS5sb2coJCh0aGlzKSk7XHJcblx0aWYoICQodGhpcykuaGFzQ2xhc3MoIFwidmVuZG9yXCIgKSApe1xyXG5cdFx0XHJcblx0XHQkKHRoaXMpLmFwcGVuZCggJGVsZW1lbnQgKTtcclxuXHRcdGFwcC5hc3NpZ25XaW5lVG9WZW5kb3IoIGNvbnRhaW5lcklkICwgJGVsZW1lbnQuYXR0ciggXCJpZFwiICkgKTtcclxuXHR9XHJcblx0ZWxzZSBpZiggJGVsZW1lbnQuaGFzQ2xhc3MoIGNvbnRhaW5lcklkICkpe1xyXG5cclxuXHRcdCQodGhpcykuYXBwZW5kKCAkZWxlbWVudCApO1xyXG5cclxuXHRcdGNvbnN0IHZlbmRvcklkOiBzdHJpbmcgPSBkcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIFwicGFyZW50SWRcIiApO1xyXG5cdFx0XHJcblx0XHRpZiggJCggXCIjXCIgKyB2ZW5kb3JJZCApLmhhc0NsYXNzKCBcInZlbmRvclwiICkgKXtcclxuXHJcblx0XHRcdGFwcC5kZWxldGVXaGluZVRvVmVuZG9yKCB2ZW5kb3JJZCAsICRlbGVtZW50LmF0dHIoIFwiaWRcIiApICk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59KVxyXG5cclxuXHJcbiQoIGRvY3VtZW50ICkub24oIFwiY2xpY2tcIiwgXCIudmVuZG9yQnV0dG9uXCIsIGZ1bmN0aW9uKCBldmVudCApe1xyXG5cclxuXHQkKCBcIi52ZW5kb3JcIiApLmhpZGUoKTtcclxuXHRcclxuXHRsZXQgdGhpc1dvcmtzcGFjZUlkOnN0cmluZyAgID0gXCIjdmVuZG9yLVwiICsgJCggdGhpcyApLmF0dHIoIFwiaWRcIiApIDtcclxuXHJcblx0JCggdGhpc1dvcmtzcGFjZUlkICkuaHRtbCggXCJcIiApO1xyXG5cdCQoIFwiI3JlZFwiICkuaHRtbCggXCJcIiApO1xyXG5cdCQoIFwiI3BpbmtcIiApLmh0bWwoIFwiXCIgKTtcclxuXHQkKCBcIiN3aGl0ZVwiICkuaHRtbCggXCJcIiApO1xyXG5cclxuXHRhcHAuaW5pdFdpbmVzT2ZWZW5kb3IoICQoIHRoaXMgKS5hdHRyKCBcImlkXCIpICk7XHJcblx0JCggdGhpc1dvcmtzcGFjZUlkICkuc2hvdygpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB2YXIgZWxlbWVudHM6IFByb21pc2UgPG51bWJlcltdPiA9IG5ldyBQcm9taXNlKCBmdW5jdGlvbiggcmVzb2x2ZSwgcmVqZWN0ICl7XHJcbi8vIFx0JC5hamF4KHtcclxuLy8gXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCBkYXRhICl7XHJcblxyXG4vLyBcdFx0fSxcclxuLy8gXHRcdGVycm9yOiBmdW5jdGlvbiggZXJyb3IgKXtcclxuXHJcbi8vIFx0XHR9XHJcbi8vIFx0fSlcclxuLy8gfSlcclxuXHJcblxyXG4vLyBlbGVtZW50c1xyXG4vLyBcdC50aGVuKCBmdW5jdGlvbiggZGF0YSApe1xyXG4vLyBcdFx0Zm9yKCBsZXQgaXRlbSBvZiBkYXRhICl7XHJcbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKCBpdGVtICk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSlcclxuLy8gXHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cclxuLy8gXHR9KTtcclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vZGVsIHtcclxuXHJcblx0cHJpdmF0ZSBpZDogbnVtYmVyO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGlkOm51bWJlcil7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0fVxyXG5cclxuXHRnZXRJZCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgJGRvbTpKUXVlcnk7XHJcblx0YWJzdHJhY3QgZGlzcGxheSggJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiApOnZvaWQ7XHJcblx0XHJcbn0iXX0=
