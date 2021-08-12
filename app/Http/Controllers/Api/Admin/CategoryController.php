<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Api\Admin\Category;
use Illuminate\Http\Request;
use Validator;
use Cookie;

class CategoryController extends Controller
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
            'category_name' => 'required', 
            'priority' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        //dd($request->all());exit;
        $input = $request->all(); 
        $user = Category::create($input); 
        if($user==true){
            return response()->json(['message'=>"Category Added"],200); 
        } else {
            return response()->json(['message'=>"Category Not Added"],400); 
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
     * @param  \App\Models\Api\Admin\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //dd("gg");exit;
         //    $jwt = Cookie::get('jwt');
         // dd($jwt);
       $q=$request->search;
       $cat =Category::where('category_name','like',"%$q%")->orderby("id","DESC")->paginate(7);
        // $user = User::when($r,function($query){
        //      $query->where('name','like',"%$r%");
        //       })->orderby("id","DESC")->paginate(7);
         return response($cat,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Api\Admin\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\Admin\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Admin\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
