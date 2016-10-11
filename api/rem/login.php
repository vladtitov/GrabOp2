<?php
require_once ('dbDriver.php');
class Login{
	var $folder = 'rem/';
	var $mydb;
	function db(){
		if(!$this->mydb)$this->mydb = new DBDriver($this->folder);
		return $this->mydb;
	}
	function douser($api,$post,$method){
		if(!isset($_SESSION['user_id'])) return $this->pleaseLogin();			
		$user_id = $_SESSION['user_id'];
		$db = $this->db();
		if($method=='GET') {
			return $db->selectById($user_id ,'users');
			
		}else if($method=='POST'){
			$post['id'] = $user_id;
			$out = new stdClass();							
			$out->result= $db->updateRow($post,'users');	
			if($out->result)$out->success='success';			
			return $out;
			
		}
	}
	function dologin($api,$post){
			
		$db = new DBDriver($this->folder);
		$sql='SELECT * FROM accounts WHERE username=? AND password=?';		
		//return md5($post['Password']);
		$out = new stdClass();
		if(isset($post['username']) && isset($post['password'])){
			$ar = array($post['username'],md5($post['password']));		
			$rows = $db->selectSafe($sql,$ar);
			if($rows){
				$user = $rows[0];
				$user_id = (int)$user['users_id'];
				$_SESSION['user_id'] = $user_id;
				$out->success='logedin';
				$out->result = session_id();
				return $out;
			}
			
			$out->error='wornguser';
			$out->message='Please check username password';
			return $out;
		}else{
			$out->error='nousername or password';		
			return $out;
		}	
	}
	
	function getAccount($api){		
		$user_id=isset($_SESSION['new_user_id'])?$_SESSION['new_user_id']:0;
		if(isset($_SESSION['user_id']))$user_id = $_SESSION['user_id'];
		if($user_id){
			$db = $this->db();
			return $db->selectById($user_id,'users');			
		}
		return $this->pleaseLogin();
		
	}
	function pleaseLogin(){
		$out = new stdClass();
		$out->error='pleaselogin';
		$out->message='Please login';
		return $out;
	}
	
	
	function exists($api,$post){
		$param = $api[1];
		$column='username';
		$user = $post;
		if($param=='email'){
			$val = isset($user['email'])?$user['email']:0;
			$column='email';
		}else{
			$val = isset($user['username'])?$user['username']:0;
		}
		
		$out = new stdClass();
		
		$db = $this->db();		
		if($val){
			$ar = $db->selectByValue($val,$column,'accounts');
			if($ar){
				$out->error='exists';
				$out->result=$column;
				return $out;
			}else{
				$out->result=$val;
				$out->success=$column;
				
			return $out;
			}
		}else {
			$out->error='error';
			$out->result=$column;
			$out->message=$post;
			return $out;
		}
	}
	
	function create($api,$post){
		$db = $this->db();
		$user = $post;		
		$out = new stdClass();
		if(isset($user['username']) && isset($user['password'])){			
			$ar = $db->selectByValue($user['username'],'username','accounts');
			if($ar){
				$out->error='exists';
				$out->result='username';
				$out->message=$user['username'];
				return $out;
			}
					
			$t = time();			
			$user['PrimaryEmail'] = $user['email'];			
			$user['created']= $t;
			$user['password'] = md5($user['password']);		
			$user_id=(int)$db->insertRow($user,'users');		
			
			if($user_id){
				$user['users_id']= $user_id;
				$res = $db->insertRow($user,'accounts');
				$_SESSION['user_id']=$user_id;
				$out->result=$res;
				$out->success='success';
			}else{
				$out->error='cant create user';
				$out->result= $user_id;
			}
						
			
			return $out;
		}else{
			$out->error=$post;
			return $out;
		}
		
		
		return $ar;
		//$db->inserRow($user,'users');
	}
	function logout($api,$post){
		$_SESSION['user_id']=0;
		unset($_SESSION['user_id']);
	}
}
