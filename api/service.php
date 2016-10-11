<?php
ini_set('html_errors', false);
session_start();
if(!isset($_GET['api']))die('hello');
$out = new stdClass();
if(!isset($_SESSION['user_id']) || $_SESSION['user_id']==0){
	header('Content-type: application/json');
	$out->error='pleselogin';
	echo json_encode($out);	
	exit();	
}
$user_id=$_SESSION['user_id'];
$api=explode('/',$_GET['api']);
if($api[0]=='')array_shift($api);
$get = $_GET;
$post = json_decode(file_get_contents('php://input'),TRUE);
//echo json_encode($post);
//exit;

$method = $_SERVER['REQUEST_METHOD'];
$api[]='_';
switch($api[0]){
	case 'post':
	require_once ('rem/posts.php');
	$ctr=  new Posts();
	$out = $ctr->process($method,$user_id,$api,$post,$get);	
	break;	
	case 'posts':
	require_once ('rem/posts.php');
	$ctr=  new Posts();
	$out = $ctr->getUserPosts($user_id);
	break;	
	case 'posts-categories':
	require_once ('rem/posts.php');
	$ctr=  new Posts();
	$out = $ctr->getCategories();
	break;	
	
	break;	
}


if(is_string($out)) echo($out);
else{
	header('Content-type: application/json');	
	echo json_encode($out);	
}


?>