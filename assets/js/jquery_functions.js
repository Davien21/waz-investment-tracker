$(document).ready(function() {
	/* ===== Declarations =====*/
	let label_1 = "Index No", label_2 = "Investment", label_3 = "Yield", label_4 = "Profit",
		label_5 = "C./Investment", label_6 = "C./Yield", label_7 = "C./Profit"; 
	let card_label = (label) => {
		return `<span class="col-6 pl-0 card-label">${label}</span>->`;
	}
	let card_data = (data) => {
		return `<span class="col-6 text-right card-data">${data}</span>`;
	}
	/* ===== Simulator section ====== */
	function goBack() {
		if ($('main').data('state')==='manner-of-input') {
			$('#manner-of-input').addClass('d-none');
  			$('#what-to-do').removeClass('d-none');
			$('main').data('state','what-to-do');
		}else if ($('main').data('state')==='manual-sim-table'){
			$('#table-section .add-btn').addClass('d-none');
			$('#table-section').addClass('d-none');
			$('#manner-of-input').removeClass('d-none');
			$('main').data('state','manner-of-input');
		}else if ($('main').data('state')==='auto-sim-input') {
			$('#manner-of-input').removeClass('d-none');
  			$('section#auto-simulation').addClass('d-none');
  			$('main').data('state','manner-of-input');
		}else if ($('main').data('state')==='auto-sim-table') {
			$('#table-section').addClass('d-none');
	  		$('section#auto-simulation').removeClass('d-none');
	  		$('#table-section tbody').empty();
  			$('main').data('state','auto-sim-input');
		}
	}
	$('#sim-btn').click(function() {
  		$('#what-to-do').addClass('d-none');
  		$('#manner-of-input').removeClass('d-none');
  		$('main').data('state','manner-of-input');
  	});
	$('#manual-sim-btn').click(function() {
  		$('#manner-of-input').addClass('d-none');
  		$('#table-section .add-btn').removeClass('d-none');
  		$('#table-section').removeClass('d-none');
  		$('main').data('state','manual-sim-table');
	});
	$('#auto-sim-btn').click(function() {
  		$('#manner-of-input').addClass('d-none');
  		$('section#auto-simulation').removeClass('d-none');
  		$('main').data('state','auto-sim-input');
	});
	$('button#submit-sim-values').click(function(e) {
		e.preventDefault();
		let auto_sim_data = $('#sim-parameters').serializeArray();
		let get_value = (index) => {return  auto_sim_data[i].value};
		console.log(auto_sim_data);
  		$('section#auto-simulation').addClass('d-none');
		$('#table-section').removeClass('d-none');
  		$('main').data('state','auto-sim-table');
  		console.log(investment_simulation_data(auto_sim_data));
    	for (let i of investment_simulation_data(auto_sim_data)) {
    		$('#investment-stack').append(investment_card(i));
    	}
    	$('.owl-carousel').owlCarousel({
		        loop:true,
		        margin: 30,
		        mouseDrag:true,
		        // autoplay:true,
		        dots: false,
	            navigation : false,
				navigationText : ["prev","next"],
		        responsiveClass:true,
		        responsive:{
		            0:{
		               	margin: 15,
		                items:1
		            },
		            576:{
		            	margin: 30,
		                items:2
		            },
	             	840:{
		            	margin: 30,
		                items:3
		            },
		            
		            1200:{
		                margin: 30,
		                items:4
		            }
		        }
	    });
		$('#investment-stack .owl-stage-outer').addClass('py-5')
	})
	$('.back-btn').click(function() {
  		goBack();
	});
	let investment_card =  (data_object) => {
		// if (data_object[i]).includes()
		let investment_card = 
			`<div class="card rounded shadow-2">
				<p class="flex rounded-top">${card_data(data_object.index)}</p>
				<p class="flex px-4">${card_label(label_2)} ${card_data(data_object.investment)}</p>
				<p class="flex px-4">${card_label(label_3)} ${card_data(data_object.yield)}</p>
				<p class="flex px-4">${card_label(label_4)} ${card_data(data_object.profit)}</p>
				<p class="flex px-4">${card_label(label_5)} ${card_data(data_object.compounded_investment)}</p>
				<p class="flex px-4">${card_label(label_6)} ${card_data(data_object.compounded_yield)}</p>
				<p class="flex px-4">${card_label(label_7)} ${card_data(data_object.compounded_profit)}</p>
			</div>
			`;
		return investment_card;
	}
	/* ===== Tracking section ====== */
	$('#track-btn').click(function() {
	})
	/* ====== Set Owl Slider for investments ====== */


}); 