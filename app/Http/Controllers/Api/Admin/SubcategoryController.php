<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Api\Admin\Subcategory;
use Illuminate\Http\Request;
use App\Models\Api\Admin\Category;
use App\Http\Controllers\Controller;
use Validator;

class SubcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'subcategory_name' => 'required', 
            'priority' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        //dd($request->all());exit;
        $input = $request->all(); 
        $user = Subcategory::create($input); 
        if($user==true){
            return response()->json(['message'=>"Subcategory Added"],200); 
        } else {
            return response()->json(['message'=>"Subcategory Not Added"],400); 
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
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
       $q=$request->search;
       //$resp =Subcategory::where('subcategory_name','like',"%$q%")->orderby("id","DESC")->paginate(7);

       // $resp = Subcategory::With('getCategoryRelation')->where('subcategory','like',"%$q%")->orderby("id","DESC")->paginate(7);
       //dd($resp);
       $resp = Category::join('subcategories','subcategories.category_id','=','categories.id')->where('subcategories.subcategory_name','like',"%$q%")->orderby("categories.id","DESC")->select('categories.category_name','subcategories.*')->paginate(7);
       if($resp!==""){
       return response($resp,200);
       }
       else{
        return response("null",400);
       }
    }

    public function SubCatview($id)
    {

       $resp = Subcategory::where('category_id',$id)->get();
       //dd($resp);
       //if($resp!==""){
       return response($resp,200);
       // }
       // else{
       //  return response("null",400);
       // }
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function edit(Subcategory $subcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subcategory $subcategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subcategory $subcategory)
    {
        //
    }
}
