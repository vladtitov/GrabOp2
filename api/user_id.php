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
