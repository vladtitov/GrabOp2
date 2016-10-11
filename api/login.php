<?php
ini_set('html_errors', false);
session_start();
if(!isset($_GET['api']))die('hello');
require_once ('rem/login.php');
$api=explode('/',$_GET['api']);
if($api[0]=='')array_shift($api);
$get = $_GET;
$post = json_decode(file_get_contents('php://input'),TRUE);
$method = $_SERVER['REQUEST_METHOD'];
$out = new stdClass();
switch($api[0]){
	case 'auth':
	$login = new Login();
	$out = $login->dologin($api,$post);	
	case 'logout':	
	$login = new Login();
	$out = $login->logout($api,$post);	
	break;
	case 'restore':	
	$login = new Login();
	$out = $login->restore($api,$post);	
	break;	
	case 'create':	
	$login = new Login();
	$out = $login->create($api,$post);	
	break;
	case 'exists':	
	$login = new Login();
	$out = $login->exists($api,$post);	
	break;		
	case 'user':	
	$login = new Login();
	$out = $login->douser($api,$post,$method);	
	
	break;	
}


if(is_string($out)) echo($out);
else{
	header('Content-type: application/json');	
	echo json_encode($out);	
}
?>