function move_center() {
	if($('.center_block').hasClass('parab')){
		console.log('ddd');
		$('.parab').removeClass('center_block');
		$('.parab').addClass('left_block');
		$('.main').addClass('center_block');
		setTimeout(function () {
			$('.main').removeClass('right_block');
			//
		},10);

		//setTimeout(function () {

		////
		//
		//},100);


	}
	if($('.center_block').hasClass('giperb')){
		console.log('ddd');
		$('.giperb').removeClass('center_block');
		$('.giperb').addClass('top_block');
		$('.main').addClass('center_block');
		setTimeout(function () {
			$('.main').removeClass('bottom_block');
			//
		},10);

		//setTimeout(function () {

		////
		//
		//},100);


	}
	if($('.center_block').hasClass('ellipt')){
		console.log('ddd');
		$('.ellipt').removeClass('center_block');
		$('.ellipt').addClass('right_block');
		$('.main').addClass('center_block');
		setTimeout(function () {
			$('.main').removeClass('left_block');
			//
		},10);

		//setTimeout(function () {

		////
		//
		//},100);


	}
}

$(window).on('load',function(){

	$('.btn_top').click(function(){
		console.log('clicl');
		$('.center_block').addClass('bottom_block');
$('.bottom_block').removeClass('center_block');
		$('.top_block').addClass('center_block');

		setTimeout(function() { 
		$('.center_block').removeClass('top_block');
		
	 }, 1000);
})
	$('.btn_left').click(function(){
		console.log('clicl');
		$('.center_block').addClass('right_block');
$('.right_block').removeClass('center_block');
		$('.left_block').addClass('center_block');

		setTimeout(function() { 
		$('.center_block').removeClass('left_block');
		
	 }, 1000);

});
	$('.btn_right').click(function(){
		console.log('clicl');
		$('.center_block').addClass('left_block');
		$('.left_block').removeClass('center_block');
		$('.right_block').addClass('center_block');

		setTimeout(function() { 
		$('.center_block').removeClass('right_block');
		
	 }, 1000);

});
	
	
	$('.menu_item:nth-child(1)').click(function () {

move_center();

		//$('.giperb').addClass('.center_block');
	})
	$('.menu_item:nth-child(2)').click(function () {
		if($('.center_block').hasClass('giperb')){

		}
		else {
			move_center();
			$('.center_block').addClass('bottom_block');
			$('.bottom_block').removeClass('center_block');
			$('.top_block').addClass('center_block');

			setTimeout(function () {
				$('.center_block').removeClass('top_block');

			}, 1000);
		}
		//$('.giperb').addClass('.center_block');
	})
	$('.menu_item:nth-child(3)').click(function () {
		if($('.center_block').hasClass('ellipt')){

		}
		else {
	move_center();
	$('.center_block').addClass('left_block');
	$('.left_block').removeClass('center_block');
	$('.ellipt').addClass('center_block');

	setTimeout(function () {
		$('.center_block').removeClass('right_block');

	}, 1000);
	//$('.giperb').addClass('.center_block');
}
	})

	$('.menu_item:nth-child(4)').click(function () {
		if($('.center_block').hasClass('parab')){

	}
	else {
			move_center();
			$('.center_block').addClass('right_block');
			$('.right_block').removeClass('center_block');
			$('.parab').addClass('center_block');

			setTimeout(function () {
				$('.parab').removeClass('left_block');

			}, 1000);
			//$('.giperb').addClass('.center_block');
		}
	})
	//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
	$('.btn-number').click(function(e){
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		var currentVal = parseFloat(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {

				if(currentVal > input.attr('min')) {
					var v = currentVal - 0.1;
					v = v.toFixed(2);
					input.val(v).change();
				}
				if(parseFloat(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}

			} else if(type == 'plus') {

				if(currentVal < input.attr('max')) {
					var v = currentVal + 0.1;
					v = v.toFixed(2);
					input.val(v).change();
				}
				if(parseFloat(input.val()) == input.attr('max')) {
					$(this).attr('disabled', true);
				}

			}
		} else {
			input.val(0);
		}
	});
	$('.input-number').focusin(function(){
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {

		minValue =  parseFloat($(this).attr('min'));
		maxValue =  parseFloat($(this).attr('max'));
		valueCurrent = parseFloat($(this).val());
minValue = minValue.toFixed(2);
		maxValue = maxValue.toFixed(2);
		valueCurrent = valueCurrent.toFixed(2);
		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}


	});
	$(".input-number").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
			// Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			// Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
});

//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/

