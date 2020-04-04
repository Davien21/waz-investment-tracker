<?php
	require 'backend.php';
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <title>Wazobia Investment | Tracker</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="icon" type="image/jpg" href="./assets/imgs/logo1.jpg"/>
	    <link rel="stylesheet" href="./assets/stylesheets/libraries/bootstrap.css">
	    <link rel="stylesheet" href="./assets/stylesheets/libraries/normalize.css">
	    <!-- <link rel="stylesheet" href="./assets/stylesheets/reset.css"> -->
	    <link rel="stylesheet" href="./assets/stylesheets/extra-responsive.css">
	    <link rel="stylesheet" href="./assets/stylesheets/style.css"> 
	</head>
	<body>
	    <div id="wrapper">
	        <!-- Main Section -->
	        <main id="main">
	        	<section id="input-section">
	        		<div class="container-fluid">
	        			<div class="row">
	        				<form action="backend.php" method="post">
	        					<div>
	        						<label>Initial Capital</label>
	        						<input type="text" name="">
	        					</div>
	        					<div>
	        						<label>Investment Number</label>
	        						<input type="text" name="">
	        					</div>
	        					<div>
	        						<label>Increment</label>
	        						<input type="text" name="">
	        					</div>
	        					<div>
	        						<label>Initial Capital</label>
	        						<input type="text" name="">
	        					</div>
	        				</form>

	        			</div>
	        		</div>
	        	</section>
	        	<section id="table-section">
	        		<div class="container-fluid bg-">
	        			<div class="row">
	        				<div class="col-6 mx-auto">
	        					<table id="sim-table" class="table table-striped ">
				        			<thead>
				        				<tr>
				        					<th scope="col"><?=$col_head_1?></th>
				        					<th scope="col"><?=$col_head_2?></th>
				        					<th scope="col"><?=$col_head_3?></th>
				        					<th scope="col"><?=$col_head_4?></th>
				        					<th scope="col"><?=$col_head_5?></th>
				        					<th scope="col"><?=$col_head_6?></th>
				        				</tr>
				        			</thead>
				        			<tbody>
				        				<?php

				        				?>
				        			</tbody>
				        		</table>
	        				</div>
	        				
	        			</div>
	        			
	        		</div>
	        		
	        		
	        	</section>
	        </main>
	    </div>
	    <!-- Js -->
	 	<script src="./assets/js/libraries/jquery.min.js"></script>
	    <script src="./assets/js/libraries/bootstrap.min.js"></script>
	    <!-- <script src="./assets/js/all.min.js"></script> -->
	    <script src="./assets/js/jquery_functions.js"></script>
	    <script src="./assets/js/main.js"></script>
	</body>
</html>