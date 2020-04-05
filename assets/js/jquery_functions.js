$(document).ready(function(){
	$('#sim-btn').click(function(){
  		$('#what-to-do').addClass('d-none');
  		$('#input-section').removeClass('d-none');
	});
	$('#track-btn').click(function(){
	})
	$('#input-section .back-btn').click(function(){
		$('#what-to-do').removeClass('d-none');
  		$('#input-section').addClass('d-none');
	})
	$('#table-section .back-btn').click(function(){
		$('#what-to-do').addClass('d-none');
  		$('#input-section').removeClass('d-none');
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
  		$('#input-section').addClass('d-none');
	})
}); 