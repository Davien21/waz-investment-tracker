<?php
	require '../backends/form-validations.php';
	function returnYield($investment)
	{
		return $yield = $investment * 1.5;
	}
	if ($_SERVER["REQUEST_METHOD"] === 'POST') {
		print_r($_POST);
		if (isset($_POST['request'])) {
			$request = sanitizeInputs($_POST['request']);
			if ($request === 'simulation') {
				$capital = sanitizeInputs($_POST['capital']);
				$number = sanitizeInputs($_POST['number']);
				$increment = sanitizeInputs($_POST['increment']);

			}
		}
	}
?>