<?php
class DBDriver {   
   public static $dbs = array();
    public static function getmyDb($folder){
        if(!isset(DBDriver::$dbs[$folder])){
           $filename =  $folder.'my.db';            
            DBDriver::$dbs[$folder] = new PDO('sqlite:'.$filename);
}
        return DBDriver::$dbs[$folder];
    }

    function getdb(){
        return DBDriver::getmyDb($this->folder);
    }
    var $folder='';
    function DBDriver($folder=''){
        $this->folder = $folder;
    }
////////////////////////////////////////////SELECTS ////////////////////////////////////////////////////
	function selectJoinById($table,$where,$value){
			$table_index = $where."_".$table;
			$table_id = $table.'_id';
			$where_id= $where.'_id';  
	    $sql = "SELECT $table.* FROM $table_index LEFT JOIN $table ON $table_index.$table_id=$table.id WHERE $table_index.$where_id=".(int)$value;
        return $this->query($sql);
    }
	function selectByIdInColumn($id,$column, $table){        
        $sql=  'SELECT * FROM '.$table.' WHERE '.$column.'='.(int)$id;       
        return $this->query($sql);
    }
    function selectByValue($value, $column, $table){        
        $sql=  'SELECT * FROM '.$table.' WHERE '.$column.'=?';
        $data= array();
		$data[]=$value;
        return $this->selectSafe($sql,$data);
    }

	function selectSafe($sql,$data){
       $stmt =  $this->getdb()->prepare($sql);	 
		if($stmt){
			$res = $stmt->execute($data);	
			if($res) return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		return $this->getdb()->errorInfo();
    }
	
	function query($sql){
		$res = $this->getdb()->query($sql);
		if($res) return $res->fetchAll(PDO::FETCH_ASSOC);
		else{
			return $this->getdb()->errorInfo();
		}		
	}
	function selectOne($sql){
		return  $this->db()->query($sql)->fetch(PDO::FETCH_ASSOC);
	}
	
    function selectColumnsById($id, $columns, $table){       
        $sql=  'SELECT '.$columns.' FROM '.$table.' WHERE id='.$id;
       return $this->query($sql);
    }

    function selectById($id,$table){       
        $sql=  'SELECT * FROM '.$table.' WHERE id='.(int)$id;		
		$res =  $this->query($sql);
        return $res?$res[0]:0;
    }
	
    function selectAllTable($table){        
        $sql = 'SELECT * FROM '.$table;
         return $this->query($sql);
    } 
///////////////////////////////////////////////////////////////////////////// END SELECTS///////////////////////////////////////

	function updateAll($sql,$ar){
			$stmt = $this->getdb()->prepare($sql);		
			if($stmt) return  $stmt->execute($ar);
			else return $this->getdb()->errorInfo();
		return	0;
	} 
    function updateRow($row,$table){
		$row = $this->cleanData($row,$table);
		if(!isset($row['id'])) return 'need-id';
        $id = (int)$row['id'];      
     
		unset($row['id']);
        $ar1 = array();       
        $data = array();
		
        foreach($row as $key=>$value){
            $ar1[]=$key . ' = ?';
            $data[] = $value;
        }		
        if($data){
            $sql = 'UPDATE '. $table . ' SET '.implode(', ',$ar1).' WHERE id = ' .$id;            
            return $this->updateAll($sql, $data);
        }else{           
            return  0;
        }

    }
    function updateRowByColumn($row,$column,$table){
		$row= $this->cleanData($row,$table);
        $id =$row[$column];
        unset($row->id);        
        unset($row[$column]);

        $ar1 = array();       
        $data = array();
         foreach($row as $key=>$value){
            $ar1[]=$key . ' = ?';
            $data[] = $value;
        }
       if($data){
           $sql= 'UPDATE '. $table . ' SET '.implode(', ',$ar1).' WHERE '.$column.' = ?';  
		   $data[]=$id;
           return $this->updateAll($sql, $data);
        }else{           
            return 0;
        }

    }

	function insertOne($sql,$ar){
			$stmt = $this->getdb()->prepare($sql);
			if(!$stmt) return $this->getdb()->errorInfo();	
		 	$res = $stmt->execute($ar);
			if($res) return $this->getdb()->lastInsertId();
			return 0;
	}

	function insertArray($data,$table){
		$keys =array_keys($data[0]);
		$qs = array_map(function(){return '?';},$keys);		
		//TODO edd remove extra values and check all arry members for sequance	
		$sql = 'INSERT INTO '.$table.' ('.implode(',',$keys).') VALUES ('.implode(',',$qs).')';		
		$db =$this->getdb();
		$stmt= $db->prepare($sql);
		if(!$stmt) return $db->errorInfo();		
		$res= array();
		foreach($data as $item){
			$ar = array_values($item);			
			 $r = $stmt->execute($ar);
			if($r) $res[] = $db->lastInsertId();
		}
		//var_dump($res);
		return $res;
	}
	
	
	function cleanData($data,$table){
		$row =  $this->query("SELECT * FROM $table LIMIT 1")[0];		
		$out = array();
		foreach($data as $key=>$value){			
			if(array_key_exists($key,$row)) $out[$key]=$value;
		}
		return $out;
	}
    function insertRow($row,$table){		
		$row = $this->cleanData($row,$table);		
        unset($row['id']);
		$keys =array_keys($row);
		$qs = array_map(function(){return '?';},$keys);	       
        $data= array_values($row);     
        $sql= 'INSERT INTO '.$table.' ('.implode(', ',$keys).') VALUES ('.implode(', ',$qs).')';		
		return $this->insertOne($sql, $data);    
    }

	
    function deleteById($id,$table){        
        $sql =  'DELETE FROM '.$table.' WHERE id='.(int)$id;		
       return $this->deleteQuery($sql);
    }

	function deleteQuery($sql){
		return $this->getdb()->exec($sql);
	}

    function deleteByIdinColumn($id,$column,$table){       
        $sql =  'DELETE FROM '.$table.' WHERE '.$column.'='.$id;
         return $this->deleteQuery($sql);
    }

    function deleteByValueinColumn($value,$column,$table){       
        $sql = 'DELETE FROM '.$table.' WHERE '.$column.'='.$value;        
       return $this->deleteQuery($sql);
    }   
	
	function queryPure($sql){
		return  $this->getdb()->query($sql);
	}
}