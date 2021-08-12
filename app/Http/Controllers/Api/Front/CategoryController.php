<?php

namespace App\Http\Controllers\api\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Api\Admin\Category;
use App\Models\Api\Admin\Subcategory;
use App\Models\Api\Admin\Listsubcategory;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index(){
        $response=array('menu_result'=>array());
    	//$menu=Category::select('id','category_name')->get();
    	$menu=DB::select('select id,category_name from categories');

        $menu_array=array();

    	foreach($menu as $menu_response){
    		$menu_id=$menu_response->id;
            
			foreach($menu_response as $key=>$val){
			    $menu_array[$key]=$val;
			}
           //print_r($menu_array);exit;
	       $menu_array['submenu_list']=array();
          // $submenu=Subcategory::select('id','category_id','subcategory_name')->where('category_id',$menu_id)->get();
           
           //$submenu=DB::table('subcategories')->select('id,category_id,subcategory_name')->where('category_id',$menu_id);
           $submenu=DB::select("select id,category_id,subcategory_name from subcategories where category_id='$menu_id'");

           $submenu_array=array();
           foreach($submenu as $submenu_response){
           	$submenu_id=$submenu_response->id;

           	   foreach ($submenu_response as $subkey => $subvalue) {
           	   	     $submenu_array[$subkey]=$subvalue;
           	   }

           	   $submenu_array['listsubmenu_list']=array();

           	    //$listsubmenu=Listsubcategory::where('subcategory_id',$submenu_id)->get();
           	    $listsubmenu=DB::select("select id,category_id,subcategory_id,listsubcategory_name from list_subcategories where subcategory_id='$submenu_id'");
                $listsubmenu_array=array();

                foreach($listsubmenu as $listsubmenu_response){
                	$listsubmenu_id=$listsubmenu_response->id;

                	foreach ($listsubmenu as $listkey => $listvalue) {
                		$listsubmenu_array[$listkey]=$listvalue;
                	}
                	array_push($submenu_array['listsubmenu_list'], $listsubmenu_array);
                }
                array_push($menu_array['submenu_list'], $submenu_array);

           }  
           array_push($response['menu_result'], $menu_array);    
    	}
    	// print_r($menu_array);
        return response()->json($response);
    	//return $response;

    }
}
