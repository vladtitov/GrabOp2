<?php
require "user_id.php";
require "rem/posts.php";

$user_id=$_SESSION['user_id'];

$get = $_GET;
$body = json_decode(file_get_contents('php://input'),TRUE);
//echo json_encode($body);
//exit;

$method = $_SERVER['REQUEST_METHOD'];

$posts = new Posts();

switch ($method){
    case 'GET':
        echo json_encode($posts ->getAllPosts());
        break;
    case 'PATCH':
        echo json_encode($posts ->updatePost($user_id,$body));
        break;
    case 'PUT':
        echo json_encode($posts ->insertPost($user_id,$body));
        break;
}

?>