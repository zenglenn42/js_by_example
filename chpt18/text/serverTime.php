<?php
	// Server side script to handle request.
	extract($_REQUEST);
	echo "Welcome, $name!";
	echo "<br />Time now is ", date("h:i:s A "), ".";
?>
