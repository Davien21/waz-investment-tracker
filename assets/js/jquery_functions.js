$(document).ready(function() {
	/* ===== Declarations =====*/
	let sim_th = (n) => {
		return $(`#sim-table-head th:nth-child(${n})`);
	}
	sim_th(1).text("S/N");sim_th(2).text("Investment");
	sim_th(3).text("Yield");sim_th(4).text("Profit");
	sim_th(5).text("C./Investment");sim_th(6).text("C./Yield");
	sim_th(7).text("C./Profit");
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
			
    		// $('.owl-carousel').trigger('refresh.owl.carousel');

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
		                margin: 0,
		                items:1
		            },
		            600:{
		                items:3
		            },
		            1000:{
		                margin: 30,
		                items:4
		            }
		        }
		    });
	})
	$('.back-btn').click(function() {
  		goBack();
	});
	let investment_card =  (data_object) => {
		// if (data_object[i]).includes()
		let investment_card = 
			`<div class="bg-white p-4 rounded card-box">
				<p>${sim_th(1).text()}: ${data_object.index}</p>
				<p>Investment: &#8358;${data_object.investment}</p>
				<p>Y&#8358;${data_object.yield}</p>
				<p>&#8358;${data_object.profit}</p>
				<p>&#8358;${data_object.compounded_investment}</p>
				<p>&#8358;${data_object.compounded_yield}</p>
				<p>&#8358;${data_object.compounded_profit}</p>
			</div>
			`;
		return investment_card;
	}
	/* ===== Tracking section ====== */
	$('#track-btn').click(function() {
	})
	/* ====== Set Owl Slider for investments ====== */


}); 