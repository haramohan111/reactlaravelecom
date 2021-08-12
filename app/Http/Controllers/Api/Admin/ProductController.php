<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Api\Admin\Product;
use App\Models\Api\Admin\Category;
use App\Models\Api\Admin\Subcategory;
use App\Models\Api\Admin\ListSubcategory;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       $q=$request->search;
       $resp = Category::leftJoin('subcategories','subcategories.category_id','=','categories.id')
       ->leftJoin('list_subcategories','list_subcategories.subcategory_id','=','subcategories.id')
       ->leftJoin('products','products.listsubcategory_id','=','list_subcategories.id')
       ->where('products.product_title','like',"%$q%")
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'listsubcategory_id' => 'required', 
            'product_title' => 'required', 
            'priority' => 'required', 
        ]);
        // if ($validator->fails()) { 
        //     return response()->json(['error'=>$validator->errors()], 401);            
        // }
            //          $file = $request->file('pimage');
            // $filename = $file->getClientOriginalName();
            //dd($request->file('product_image'));
      // dd($request->all());
         if($request->hasFile('product_image')){
            $file = $request->file('product_image');
            $filename = $file->getClientOriginalName();
            //dd($filename);
            $finalName = date('His').$filename;
            //dd($file);
            $request->file('product_image')->storeAs('images/',$finalName,'public');
            $file->move('api/admin/',$finalName);
         }
        //dd($request->all());exit;
        //$input = $request->all(); 
        $user = Product::create( 
            [
            'seller_id'=>$request->seller_id,
            'skucode'=>$request->skucode,    
            'category_id' => $request->category_id,
            'subcategory_id' => $request->subcategory_id,
            'listsubcategory_id' =>  $request->listsubcategory_id,
            'product_title'=>$request->product_title,
            'product_image'=>$finalName,
            'priority' => $request->priority,
            'stock'=>$request->stock,
            'size'=>$request->size,
            'color'=>$request->color,
            'mrp'=>$request->mrp,
            'selling_price'=>$request->selling_price,
            'height'=>$request->height,
            'width'=>$request->width,
            'length'=>$request->length,
            
            ] 
            ); 
        if($user==true){
            return response()->json(['message'=>"Product Added"],200); 
        } else {
            return response()->json(['message'=>"Product Not Added"],400); 
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Admin\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Api\Admin\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\Admin\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Admin\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
