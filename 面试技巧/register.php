<?php

	$passwordArr=array("sb","666666");

	$postpassword=$_POST['password'];

	$isIn=in_array($postpassword,$passwordArr);

	if($isIn){
		echo "输入正确，";
	}else{
		echo "输入错误，请再次尝试》";
	}


?>