var numberClick = 0;
scrolled = true;

var scrollMove;

$(document).ready(function () {

	var root = 'http://jsonplaceholder.typicode.com';

	$(".orange").on("click",function(){

		numberClick++;

		$.ajax({
			url: root + '/albums',
			method: 'GET',
			contentType: 'application/json',
			dataType: 'json',
			success: function(result){
		        alert(result.length);
		    },
		    error: function (request, errorType, errorMessage){
				alert('Error: ' + errorType + ', message: ' + errorMessage)
				console.log(request);
			}
		})
	})

});

$(".red").on("click",function(){
	alert( numberClick )
});

$("#scroll_container").on("scroll", function() {
	if(scrolled){ //when scroll
		alert("Stai scrollando!");
		scrolled=false;
	};
	if(scrollMove > $(this).scrollTop()){ //when scroll to top
		console.log("stai salendo...")
	}
	if(scrollMove < $(this).scrollTop()){ //when scroll to bottom
		console.log("stai scendendo...")
	}
	scrollMove = $(this).scrollTop();
});

$('#scroll_container').bind('scroll', function(){
    if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){ //when scroll is finished
        alert("Fine!");
    };
    if($(this).scrollTop() == 0){ //when scroll is on the top
        alert("Inizio!");
    };
})