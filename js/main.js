$(document).ready(function(){
	//Type in JQuery code here
	var mobileNav = new Snap({
		element: document.getElementById('content'),
		disable: 'right'
	});

	$('#SwipeCarousel').hammer().on("dragright", function(event){
		$('#SwipeCarousel').carousel('prev');
	});

	$('#SwipeCarousel').hammer().on("dragleft", function(event){
		$('#SwipeCarousel').carousel('next');
	});

})