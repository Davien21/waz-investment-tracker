<?php
	require '../backends/form-validations.php';
	function returnYield($investment)
	{
		return $yield = $investment * 1.5;
	}
	$investment_simulation_data = function ($number,$first_investment,$increment) {
		$data_array = [];
		$compounded_investment = $compounded_yield = $compounded_profit = 0;
		for ($i=0;$i<$number;++$i) {
			$investment = $first_investment + ($increment*$i);
			if ($i===0) {
				$yield = 0;
				$compounded_yield = 0;
			}else {
				$yield = $investment * 1.5;
				$compounded_yield += $yield;
			}
			$profit = $yield - $investment;
			$compounded_investment += $investment;
			$compounded_profit += $profit;
			$block_data = 
				[
					'index'=>$i+1,'investment'=>$investment,
					'yield'=>$yield,'profit'=>$profit,
					'compounded_investment'=>$compounded_investment,
					'compounded_yield'=>$compounded_yield,
					'compounded_profit'=>$compounded_profit
				];
			array_push($data_array, $block_data);
		}
		return $data_array;
	};
	if ($_SERVER["REQUEST_METHOD"] === 'POST') {
		if (isset($_POST['request'])) {
			$request = sanitizeInputs($_POST['request']);
			if ($request === 'simulate') {
				$investment = sanitizeInputs($_POST['investment']);
				$number = sanitizeInputs($_POST['number']);
				$increment = sanitizeInputs($_POST['increment']);
				$capital = sanitizeInputs($_POST['capital']);
			
				print_r($investment_simulation_data($number,$investment,$increment));

			}
		}
	}
?>