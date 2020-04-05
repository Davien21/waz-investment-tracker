$(document).ready(function(){
	/* ===== Simulator section ====== */

	$('#sim-btn').click(function(){
  		$('#what-to-do').addClass('d-none');
  		$('#manner-of-input').removeClass('d-none');
  		// $('section#auto-simulation').removeClass('d-none');
	});
	$('#manner-of-input .back-btn').click(function(){
  		$('#manner-of-input').addClass('d-none');
  		$('#what-to-do').removeClass('d-none');
	});
	$('#auto-sim-btn').click(function(){
  		$('#manner-of-input').addClass('d-none');
  		$('section#auto-simulation').removeClass('d-none');
	});
	$('section#auto-simulation .back-btn').click(function(){
  		$('#manner-of-input').removeClass('d-none');
  		$('section#auto-simulation').addClass('d-none');
	})
	$('#table-section .back-btn').click(function(){
		$('#what-to-do').addClass('d-none');
		$('#table-section').addClass('d-none');
  		$('section#auto-simulation').removeClass('d-none');
  		$('#table-section tbody').empty();
	})
	let table_row =  (data_object) => {
		// if (data_object[i]).includes()
		let table_row = 
			`<tr>
				<td>${data_object.index}</td>
				<td>&#8358;${data_object.investment}</td>
				<td>&#8358;${data_object.yield}</td>
				<td>&#8358;${data_object.profit}</td>
				<td>&#8358;${data_object.compounded_investment}</td>
				<td>&#8358;${data_object.compounded_yield}</td>
				<td>&#8358;${data_object.compounded_profit}</td>
			 </tr>`;
		return table_row;
	}
	$('#sim-parameters').submit(function(e){
		e.preventDefault();
		let all_inputs = $('#sim-parameters').serialize()+'&request=simulate';
		$('#table-section').removeClass('d-none');
	 	$.post("./apis/tracker-api.php",all_inputs, function(data, status) {
	    	let investment_data = JSON.parse(data);	
	    	for (let i of investment_data) {
	    		$('#table-section tbody').append(table_row(i));
	    	}
  		});
  		$('section#auto-simulation').addClass('d-none');
	})
	/* ===== Tracking section ====== */
	$('#track-btn').click(function(){

	})
}); 