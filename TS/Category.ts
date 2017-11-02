
export class Category {
	
	public id: number;
	public name: string;
	public $dom: JQuery<HTMLElement>

	constructor( id: number , name: string){
		this.id = id;
		this.name = name;

	}

	display(  $parent: JQuery<HTMLElement> ){

		let div: string = '<div id="' + this.name + '" class="block container"></div>';
		
		this.$dom = $(div);
	
		$parent.append( this.$dom );
	}




}