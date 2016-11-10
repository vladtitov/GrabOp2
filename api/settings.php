<?php
ini_set('html_errors', false);
session_start();
$out = new stdClass();
if(!isset($_SESSION['user_id']) || $_SESSION['user_id']==0){
    header('Content-type: application/json');
    $out->error='pleselogin';
    echo json_encode($out);
    exit();
}
$user_id = $_SESSION['user_id'];
$method = $_SERVER['REQUEST_METHOD'];
$fileAccountSettings = '../media/user_'.$user_id.'/accountSettings.json';

if($method == 'GET'){
//    $accountSettings = json_decode(file_get_contents('../media/user_'.$user_id.'/accountSettings.json'));
    $out = file_get_contents($fileAccountSettings);
    if(!$out) {
        createAccountSettings($fileAccountSettings);
        $out = file_get_contents($fileAccountSettings);
    }
} else if($method=='POST') {
//    $post = json_decode(file_get_contents('php://input'),true);
    $post = file_get_contents('php://input');
    $res = file_put_contents($fileAccountSettings,$post);
    if(!$res){
        $out->error='error';
        $out->message='settings not saved';
    } else {
        $out->success='success';
        $out->message='settings saved';
    }
}

//require_once ('rem/login.php');

if(is_string($out)) echo($out);
else{
	header('Content-type: application/json');	
	echo json_encode($out);	
}

function createAccountSettings($fileAccountSettings){
    $file = './data/accountSettings.json';

    if (!copy($file, $fileAccountSettings)) {
        echo "не удалось скопировать accountSettings.json...\n";
    }
}
?>