<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Api\Admin\ListSubcategory;
use Illuminate\Http\Request;
use App\Models\Api\Admin\Category;
use App\Http\Controllers\Controller;
use Validator;


class ListSubcategoryController extends Controller
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
            'subcategory_id' => 'required', 
            'listsubcategory_name' => 'required',
            'priority' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        //dd($request->all());exit;
        $input = $request->all(); 
        $user = ListSubcategory::create($input); 
        if($user==true){
            return response()->json(['message'=>"ListSubcategory Added"],200); 
        } else {
            return response()->json(['message'=>"ListSubcategory Not Added"],400); 
        }
    }

    public function ListSubcateView($id)
    {
       $resp = ListSubcategory::where('subcategory_id',$id)->get();
       //dd($resp);
       //if($resp!==""){
       return response($resp,200);
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
     * @param  \App\Models\Api\Admin\ListSubcategory  $listSubcategory
     * @return \Illuminate\Http\Response
     */
    public function show(ListSubcategory $listSubcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Api\Admin\ListSubcategory  $listSubcategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ListSubcategory $listSubcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\Admin\ListSubcategory  $listSubcategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ListSubcategory $listSubcategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Admin\ListSubcategory  $listSubcategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ListSubcategory $listSubcategory)
    {
        //
    }
}
