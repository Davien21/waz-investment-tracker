<?php
	require 'form-validations.php';
	$col_head_1 = "S/N";
	$col_head_2 = "Investment";
	$col_head_3 = "Yield";
	$col_head_4 = "C./Investment";
	$col_head_5 = "C./Yield";
	$col_head_6 = "C./Profit";
	function return_yield($investment)
	{
		return $yield = $investment * 1.5;
	}
	$amount = 30000;
	// echo returnYield($amount);
	function get_c_invest($initial_capital,$increment,$number) {
		$array_of_c_investment = [];
		$current_value = 0;
		for ($i=0;$i<$number;$i++) {
			$current_value += $initial_capital + $increment*$i;
			array_push($array_of_c_investment, $current_value);
		}
		return $array_of_c_investment;
	};
	print_r(get_c_invest(20000,10000,10));
	// function get_c_investment($type,'standard_c_investment') {

	// }

?>