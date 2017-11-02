
export class APIService {

	private static instance: APIService = null;
	private url: string = "http://localhost/courses_typescript/vendor_products/API/";

	// design patern singleton
	static getService():APIService {

		if(!APIService.instance){
			APIService.instance = new APIService();
		}
		return APIService.instance;
	}

	constructor(){};

	getWines(): Promise <any> {

		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "wines",
				dataType : "json",
				success: function(wines: {}){
					resolve( wines ); 
				},
				error: function( wines:{} ){
					reject( wines );
				}

			})
		})
	}

	getVendors(): Promise <any> {

		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "vendors",
				dataType : "json",
				success: function(vendors: {}){
					resolve( vendors ); 
				},
				error: function( error:{} ){
					reject( error );
				}

			})
		})
	}

	postVendorWines( vendorId:number , wineId:number ): Promise <any> {

		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "vendorWine",
				method : "POST",
				dataType : "json",
				data : {
					vendorId : vendorId,
					wineId : wineId
				},
				success: function(wines: {}){
					resolve( wines ); 
				},
				error: function( wines:{} ){
					reject( wines );
				}

			})
		})
	}

	deleteVendorWines( vendorId:number , wineId:number ): Promise <any> {

		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "deleteWineToVendor/" + vendorId + "/" + wineId,
				method : "DELETE",
				dataType : "json",
				success: function(wines: {}){
					resolve( wines ); 
				},
				error: function( wines:{} ){
					reject( wines );
				}

			})
		})
	}

}


