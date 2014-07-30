$(function () {

	$('#random').on('click', function(e){
		e.preventDefault()
		$.get('/numbers', function(numbers){
			console.log('The numbers are:', numbers);
			$('#numbers').append(numbers.map(function(num){
				return $('<li>').text(num);
			}))
		});
	})

	$('#submitANumber').on('click', function(){
		var count = 0;
		var submitted = $('#submitANumber').prev().val();
		$.post('/addANumber', {num: submitted}, function(numbers){
			console.log(numbers)
			$('#numbers').html('')
			$('#numbers').append(numbers.map(function(num){
				count += parseInt(num);
				return $('<li>').text(num);
			}))
			$('#total').text(count)
		});
	})

});
