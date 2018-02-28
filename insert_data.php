<?php include("inc/config.php");
header("Content-Type:text/html;charset=utf-8");
@extract($_POST);
$sql="INSERT INTO `list_data` (`id`, `u_name`, `u_mobile`, `u_renshu`,`u_sex`, `u_time`)  VALUES (NULL,'$name', '$moblie', '$renshu','$sex', now());";
if($name!="" or $mobile!="" or  $renshu!=""){
	if(mysql_query($sql,$conn)){	
echo "<!doctype html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'/></head><body  style='margin:0; padding:0;'>提交成功！</body></html> ";
		echo "<meta http-equiv='refresh' content='3; url=clipBoard.html'>";
	}else{
		echo '<script>alert("提交数据错误！");history.go(-1)</script>';
	}
}else{
		echo '<script>alert("请正确填写信息！");history.go(-1)</script>';
}

?>