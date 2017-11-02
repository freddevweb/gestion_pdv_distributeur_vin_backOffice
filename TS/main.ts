import {App} from "App";

var app = new App();





$( document ).on( "dragover", ".container", function( event ){
	event.preventDefault();
} );

$( document ).on( "dragstart", ".item", function( event ){
	
	const dragEvent: DragEvent = event.originalEvent as DragEvent;
	
	dragEvent.dataTransfer.setData( "id", $(this).attr("id") );
	dragEvent.dataTransfer.setData( "parentId", $( this ).parent().attr("id") );
});

$( document ).on( 'drop', ".container", function( event ){

	const dragEvent: DragEvent = event.originalEvent as DragEvent;
	const id:string = dragEvent.dataTransfer.getData( "id" );

	const $element: JQuery = $( "#"+id );
	
	const containerId:string = $(this).attr( "id" );
	// console.log($(this));
	if( $(this).hasClass( "vendor" ) ){
		
		$(this).append( $element );
		app.assignWineToVendor( containerId , $element.attr( "id" ) );
	}
	else if( $element.hasClass( containerId )){

		$(this).append( $element );

		const vendorId: string = dragEvent.dataTransfer.getData( "parentId" );
		
		if( $( "#" + vendorId ).hasClass( "vendor" ) ){

			app.deleteWhineToVendor( vendorId , $element.attr( "id" ) );
			
		}
		
	}
})


$( document ).on( "click", ".vendorButton", function( event ){

	$( ".vendor" ).hide();
	
	let thisWorkspaceId:string   = "#vendor-" + $( this ).attr( "id" ) ;

	$( thisWorkspaceId ).html( "" );
	$( "#red" ).html( "" );
	$( "#pink" ).html( "" );
	$( "#white" ).html( "" );

	app.initWinesOfVendor( $( this ).attr( "id") );
	$( thisWorkspaceId ).show();

})











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
