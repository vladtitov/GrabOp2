<?php
require_once ('dbDriver.php');
class Posts{
	var $mydb;
	function Posts(){
		$this->mydb = new DBDriver('rem/');
	}
	
	function db(){
		return $this->mydb;
	}
	function process($method,$user_id,$api,$post,$get){	
		$extra = $api[2];		
		$post_id = 	(int)$api[1];
		
		if($extra=='_'){
				if($post_id && $method==='GET')return $this->getPostById($user_id,$post_id);
				if($post_id && $method==='POST')return $this->saveUserPost($user_id,$post_id,$post);
			}
		
		if($extra=='attachments'){
			if($post_id && $method==='GET')return $this->getAttachments($post_id,$user_id);
			if($post_id && $method==='POST')return $this->ssaveAttachments($post_id,$post,$user_id);
		}
		
		if($extra=='attachment'){
			$attachment_id = $api[3];
			
			if($post_id && $method==='DELETE' && $attachment_id)return $this->deleteAttachment($attachment_id,$post_id,$user_id);
			if($post_id && $method==='POST' && $attachment_id)return $this->saveAttachment($post,$attachment_id,$post_id,$user_id);
		}
		
		
	
		$out = new stdClass();
		$out->result='hello';
		return $out;
	}
	
	function getCategories(){
		return $this->db()->selectAllTable('categories');
	}

	function saveAttachment($post,$attachment_id,$post_id,$user_id){
		$id = (int)$attachment_id;	
		if($id && $id>0){
			return $this->db()->updateRow($post,'attachments');
		}else  {
			$id = $this->db()->insertRow($post,'attachments');
			$out= new stdClass();
			$out->insertId= $id;
			$out->success='success';
			return $out;
		}
	}
	function deleteAttachment($id,$post_id,$user_id){
		$num= $this->db()->deleteById($id,'attachments');
		$out= new stdClass();
		if($num){
			$out->success='success';
			$out->result= $num;
		}else{
			$out->error='cantdelete';
		}
		return $out;
	}
	function getAttachments($post_id,$user_id){		
		return $this->db()->selectByIdInColumn($post_id,'posts_id','attachments');
	}
	function saveAttachments($post_id,$data,$user_id){		
		$db =$this->db();
		$db->deleteByIdinColumn($post_id,'posts_id','attachments');
		$att = array();
		foreach($data as $item){
			$item['users_id']=$user_id;
			$item['posts_id']=$post_id;
			$att[]=$item;
		}		
		return $db->insertArray($att,'attachments');
		
	}
		
		
	function getPostById($user_id,$id){		
		return $this->db()->selectById($id,'posts');
	}
		
	function saveUserPost($user_id,$post_id,$post){	
		//var_dump($post);
		$out= new stdClass();		
		$post_id = isset($post['id'])?$post['id']:0;
		
		$db = $this->db();				
		$post['user_id']= $user_id;	
		
		if($post_id){			
			$db->updateRow($post,'posts');			
		}else {
			$post_id = $db->insertRow($post,'posts');
			$out->insertId=$post_id;
		}
			
		$out->post_id = $post_id;		
		
		return $out;	
	}

	function updatePost($user_id,$post){
        $out= new stdClass();

        $db = $this->db();
        $post['user_id'] = $user_id;

        $out->result = $db->updateRow($post, 'posts');
        return $out;
    }

    function insertPost($user_id,$post){
        $out= new stdClass();
        $db = $this->db();
        $post['user_id']= $user_id;

        $post_id = $db->insertRow($post,'posts');
        $out->insertId=$post_id;

        $out->post_id = $post_id;

        return $out;
    }
	
	function getUserPosts($user_id){		
		return $this->db()->selectByValue($user_id,'user_id','posts');
		//return $db->selectJoinById('posts','users',$user_id);		
	}

    function getAllPosts(){
        return $this->db()->selectAllTable('posts');
        //return $db->selectJoinById('posts','users',$user_id);
    }


	
}
