<?php

namespace App\Http\Controllers\api\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Api\Admin\Product;
use App\Models\Api\Admin\Category;
use App\Models\Api\Admin\Subcategory;
use App\Models\Api\Admin\ListSubcategory;
use App\Models\Api\Front\NewProduct;
use Validator;



class NewProductController extends Controller
{
    public function index(){
       //$q=$request->search;
       $resp = Category::leftJoin('subcategories','subcategories.category_id','=','categories.id')
       ->leftJoin('list_subcategories','list_subcategories.subcategory_id','=','subcategories.id')
       ->leftJoin('products','products.listsubcategory_id','=','list_subcategories.id')
       // ->where('products.product_title','like',"%$q%")
       ->orderby("products.id","DESC")
       ->select('categories.category_name','subcategories.subcategory_name','list_subcategories.listsubcategory_name','products.*')
       ->paginate(7);
       // ->toSql();
       //dd($resp);
       if($resp!==""){
       return response($resp,200);
       }
       else{
        return response("null",400);
       }
    }

    public function addMenu(Request $request){
      $validator = Validator::make($request->all(), [ 
            'menu_id' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        //dd($request->all());exit;
        $input = $request->all(); 
        $user = NewProduct::create($input); 
        if($user==true){
            return response()->json(['message'=>"Menu Added"],200); 
        } else {
            return response()->json(['message'=>"Menu Not Added"],400); 
        }
    }

    public function menuid(){
      $resp=NewProduct::pluck('menu_id')->toArray();
      if($resp==true){
            return response($resp,200); 
        } else {
            return response()->json(null,400); 
        }

    }
}
