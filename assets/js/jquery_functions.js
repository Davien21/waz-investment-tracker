$(document).ready(function(){
	$('#sim-btn').click(function(){
  		$('#what-to-do').addClass('d-none')
  		$('#input-section').removeClass('d-none')
	});
	$('#track-btn').click(function(){
		
	})
	$('#sim-parameters').submit(function(e){
		e.preventDefault();
		let all_inputs = $('#sim-parameters').serialize()+'&request=simulate';
	 	$.post("./apis/tracker-api.php",all_inputs, function(data, status){
	 		// console.log(status);
	    	alert("Data: " + data + "\nStatus: " + status);
	    	$.each(data,function(i,value){
	    		console.log(value);
	    	})
  		});
  		$('#input-section').addClass('d-none');
  		$('#table-section tbody').append
  		$('#table-section').removeClass('d-none');

	})
	
}); 