<?php
	$dbhost ="localhost";
	$dbuser ="root";
	$dbpw   ="";
	$dbname ="wap_data";
	$dbbma  ="set names 'utf8'";
	$conn=mysql_connect($dbhost,$dbuser,$dbpw)or die("�������ӵ�������".mysqli_error());
	mysql_select_db($dbname,$conn);
	mysql_query($dbbma);
?>