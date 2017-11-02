import { Wine } from "Wine";
import { Category } from "Category";
import { Vendor } from "Vendor";
// import { BddWine } from "BddWine";
import { BddVendors } from "BddVendors";
import { BddCategory } from "BddCategory";
import { APIService } from "./Ajax";

export class App {
	
	
	
	
	private wines: { [key:string]: any }[];
	private vendors: { [key:string]: any }[];
	private vendorWines: { [key: number]: number[] };
	private catergory: {}[];

	private tempArray: {}[];
	private tempArray1: {}[];
	
	public $nav: JQuery<HTMLElement>;
	public $vendorButton: JQuery<HTMLElement>;
	public $vendorspace: JQuery<HTMLElement>;
	public $vendors: JQuery<HTMLElement>;
	public $wines: JQuery<HTMLElement>;
	
	
	constructor(){
		
		// structural elements
		this.wines = [];
		this.vendors = [];
		this.vendorWines = {};
		this.catergory = [];

		this.tempArray = [];
		this.tempArray1 = [];
		


		// dom elements
		this.$nav = $( "#nav" );
		this.$vendors = $( "#vendors");
		this.$wines = $( "#wines" );
		
		// functions
		this.init();


	}

	init(): void {

		this.initCategory();

		this.initWhine();

		this.initVendor();
	};


	initWhine(): void {

		let i: number = 0;

		var api:APIService = APIService.getService();
		let products:Promise<any> = api.getWines();

		products
			.then( ( products ) => {
				
				for( let wine of products ){
					// console.log(products);
					// console.log(wine);
					let vin = new Wine( wine.name as string, wine.color as string, wine.year as number, wine.designation as string, wine.id as number, wine.categoryId as number);
		
					this.wines.push(vin);
					let color = wine.color as string;
		
					vin.display( $( "#"+color ) , i );
		
					
					i ++;
				}

			})
			.catch( (error) => {
				// console.log( error );
			} )
	}

	initVendor(): void {

		var api:APIService = APIService.getService();
		var status = api.getVendors();

		status
			.then( ( vendors ) => {
				
				for( let vendor of vendors ){
					
					let vendeur = new Vendor( vendor.name as string, vendor.id as number, vendor.products as number[]);
					
					this.vendors.push(vendeur);
					vendeur.displayButtons( this.$nav );
					vendeur.displayVendorSpace( this.$vendors );

					this.vendorWines[vendeur.id] = [];
				}

			})
			.catch( (error) => {
				// console.log("err");
				// console.log( error );
			} )

	}

	initCategory(): void {

		let iterator = 0;

		for( let category of BddCategory ){
			let newCategory = new Category(category.id as number, category.name as string);

			this.catergory.push( newCategory );

			newCategory.display( this.$wines );

			iterator ++;
		}

		var vHeight = 100 / iterator;

		this.$wines.children().css( "height", vHeight +"%" );
	}

	

	assignWineToVendor( vendorId: string , whineId: string ):void {

		let vendorid: number = this.extractId( vendorId );

		let wineid: number = this.extractId( whineId );

		this.vendors[ vendorid - 1 ].products.push( wineid );

		var api:APIService = APIService.getService();

		var status = api.postVendorWines( vendorid, wineid );
		
		status
			.then( ( products ) => {
				// console.log("ici");
				// console.log(products);
				

			})
			.catch( (error) => {
				// console.log("err");
				// console.log( error );
			} )
		
		
	}

	deleteWhineToVendor( vendorId: string , whineId: string ):void {

		let vendorid: number = this.extractId( vendorId );
		let wineid: number = this.extractId( whineId );

		let index = this.vendors[ vendorid - 1 ].products.indexOf( String(wineid) );
		
		if( index > -1 ){
			this.vendors[ vendorid - 1 ].products.splice( index ,1 );

			// console.log("here");

			var api:APIService = APIService.getService();
			var status = api.deleteVendorWines( vendorid, wineid );
			
			status
				.then( ( products ) => {
					// console.log("ici");
					// console.log(products);
					

				})
				.catch( (error) => {
					// console.log("err");
					// console.log( error );
				} )
		}

		// console.log(this.vendors[0].products);
	}

	extractId( stringId:string ): number{
		
		return parseInt( stringId.slice(-1) );
	}


	initWinesOfVendor( vendorid: string ):void {


		let vendorId: number = this.extractId( vendorid );
		
		for( let vendor of this.vendors ){

			if( vendor.id == vendorId ){
				
				for( let objWine of this.wines ){
					// console.log(wine);
					let vendu = false;
					let i = 0;
					let color = objWine.color;

					for( let wine of vendor.products ){

						if( wine == objWine.id ){
							vendu = true;
						}
						i++;
					}

					if( vendu == true ){
						
						objWine.postVendorWines
						objWine.display( $( "#vendor-v"+vendorId ) , i );
						
						
					}
					else {

						objWine.display( $( "#"+color ) , i );
					}
					
				} 
				break;
			}
		}
		// console.log(this.vendors[0].products);
	}


	


}