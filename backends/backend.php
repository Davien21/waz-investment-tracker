<?php
	$col_head_1 = "S/N";
	$col_head_2 = "Investment";
	$col_head_3 = "Yield";
	$col_head_4 = "C./Investment";
	$col_head_5 = "C./Yield";
	$col_head_6 = "C./Profit";
	if ($_SERVER["REQUEST_METHOD"] === 'POST') {
		print_r($_POST);
		if (isset($_POST['request'])) {
			$request = sanitizeInputs($_POST['request']);
			if ($request === 'delete_jobs') {
				// print_r($_POST);
				$id = sanitizeInputs($_POST['id']);
				$db_deleteOps = new DeleteQuery($database_name);
				$db_deleteOps->deleteJob($id);
			}
		}
	}
	

?>