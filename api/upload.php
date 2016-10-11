<?php
//require_once('dbDriver.php');
ini_set('html_errors', false);
session_start();

if(isset($_SESSION['new_user_id']))$user_id=$_SESSION['new_user_id']; 
if(isset($_SESSION['user_id']))$user_id = $_SESSION['user_id'];
if(!isset($user_id))die('hello');

$root = '../';
$folder= 'media/user_'.$user_id;
$file = $_FILES["file"];
if(isset($_GET['api'])){
	$api= explode('/',$_GET['api']);
}


header('Content-type: application/json');


$out = new stdClass();
$err = checkFoErrors($file);
if($err)$out = $err;
else{
	$filename = uploadImage($root,$folder,$file);
	if($filename){
		$out->success='success';
		$out->result= $filename;	
		
	}else $out->error='error move file';
}
	
echo json_encode($out);	
function uploadImage($root,$folder,$file){		
		if (!file_exists($root.$folder)) mkdir($root.$folder, 0755, true);
		$filename = $folder.'/'.time().'_'.$file["name"];		
		if(move_uploaded_file($file["tmp_name"],$root.$filename))return $filename;			
		return 0;		
	}
	
	function checkFoErrors($file){
		$out=new stdClass();
		if ($file["error"] > 0){
			$out->error= $file["error"];
				switch ($file["error"]) {
					case UPLOAD_ERR_OK:
						$out->result = 'UPLOAD_ERR_OK';
					break;
					case UPLOAD_ERR_NO_FILE:
						$out->result = 'UPLOAD_ERR_NO_FILE';            
					case UPLOAD_ERR_INI_SIZE:
					case UPLOAD_ERR_FORM_SIZE:
						$out->result = 'UPLOAD_ERR_INI_SIZE';
					default:
						$out->result = 'UNKNOWN_ERROR';
				}
					
			return $out;
		}
		return 0;
	}


?>