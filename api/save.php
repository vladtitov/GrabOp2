<?php
  $file_name= $_GET['filename'];
  $res = file_put_contents($file_name,file_get_contents('php://input'));
  $out= new stdClass();
  $out->result=$res;
  echo json_encode($out);
  ?>
