$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		speed:1000,
		autoplaySpeed:900,
		responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

