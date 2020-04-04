$(document).ready(function(){
	$('#sim-btn').click(function(){
  		$('#what-to-do').addClass('d-none')
  		$('#input-section').removeClass('d-none')
	});
	$('#track-btn').click(function(){
		
	})
	$('#sim-parameters').submit(function(e){
		e.preventDefault();
		let all_inputs = $('#sim-parameters').serialize();
	 	$.post("./backends/backend.php",{all_inputs}, function(data, status){
	    	alert("Data: " + data + "\nStatus: " + status);
  		});
  		$('#table-section').removeClass('d-none')
  		$('#input-section').addClass('d-none')
	})
	
}); 