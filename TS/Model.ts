export abstract class Model {

	private id: number;


	constructor( id:number){
		this.id = id;
	}

	getId(): number {
		return this.id;
	}

	protected abstract $dom:JQuery;
	abstract display( $parent: JQuery<HTMLElement> ):void;
	
}