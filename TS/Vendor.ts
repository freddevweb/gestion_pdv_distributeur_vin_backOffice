
export class Vendor {
	
	
	
	public id: number;
	public name: string;
	public products: number[];

	public $dom: JQuery<HTMLElement>
	
	
	constructor( name: string, id:number , products:number[] ){
		this.id = id;
		this.name = name;
		this.products = products;
	}

	displayButtons( $parent: JQuery<HTMLElement> ): void {

		let button: string = '<button id="v' + this.id + '" class ="vendorButton" >' + this.name.charAt(0).toUpperCase() + this.name.slice(1) + '</button>';
	
		this.$dom = $(button);

		$parent.append( this.$dom );

	}

	displayVendorSpace( $parent: JQuery<HTMLElement> ):void{
		let div: string = '<div id="vendor-v' + this.id +'" class="container vendor ' + this.name + '">';
			div += '<h2>' + this.name.charAt(0).toUpperCase() + this.name.slice(1) +'</h2>';
			div += '<div class="vendorWine">';
			div += '</div>';
			div += '</div>';
		
		this.$dom = $(div);

		$parent.append( this.$dom );
	}

}