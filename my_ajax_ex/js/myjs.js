$(document).ready(function () {

	var root = 'http://jsonplaceholder.typicode.com';

	$('#btn-photo').on('click', function(){
		$.get('html/photo.html', function ( userTemplate ) {
			$.ajax({
				url: root + '/photos',
				method: 'GET', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				//Call if request return successfully
				success: function (response) {
					var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
					for(var i = 0; i < 6 ; i ++) {
						var html = template(response[i]);
						$('#photo').append(html)
					}
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		});
	});

	$('#btn-table').on('click', function(){

		$.get('html/table.html', function ( userTemplate ) {
			$.ajax({
				url: root + '/users',
				method: 'GET', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				//Call if request return successfully
				success: function (response) {
					var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
					for(var i = 0; i < 10 ; i ++) {
						var html = template(response[i]);
						$('#table').append(html)
					}
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		});

		$(".hide").removeClass("hide");
	});

	$('#btn-form').on('click', function() {

		var user = {
			name: $('#name').val(),
			email: $('#email').val(),
			address: $('#address').val(),
		}

		$.ajax(
			{
				url: root + '/users',
				method: 'POST', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				data: JSON.stringify(user),
				//Call if request return successfully
				success: function (response) {
					alert('OK')
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		console.log(user)
	});
});