
export class Wine {
	
	
	public name: string;
	public color: string;
	public year: number;
	public designation: string;
	public categoryId: number;

	public id: number;

	public $dom: JQuery<HTMLElement>

	constructor( name: string, color: string, year:number, designation: string, id: number, categoryId: number ){

		this.id = id;
		this.name = name;
		this.color = color;
		this.year = year;
		this.designation = designation;
		this.categoryId = categoryId;

	}


	display( $parent: JQuery<HTMLElement> , iterator?: number ): void {

		let div: string = '<div class="item ' + this.color + '" id="w' + this.id + '" data-position="' + iterator + '" draggable="true" title="' + this.designation + '" >';
		div += '<span>'+ this.name +'</span></br>';
		div += '<span>'+ this.year +'</span><br />';
		div += '</div>';

		this.$dom = $(div);

		$parent.append( this.$dom );

	}



}