<?php

namespace App\Http\Controllers\Api\Admin;
use App\Models\Api\Admin\Slider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class SliderController extends Controller
{
    public function index(Request $request)
    {
       $q=$request->search;
       $cat =Slider::where('name','like',"%$q%")->orderby("id","DESC")->paginate(7);
       return response($cat,200);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'slider_name' => 'required', 
            'priority' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

         if($request->hasFile('image')){
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            //dd($filename);
            $finalName = date('His').$filename;
            //dd($file);
            $request->file('image')->storeAs('images/',$finalName,'public');
            $file->move('api/admin/slider',$finalName);
         }
        //dd($request->all());exit;
        //$input = $request->all(); 
        $user = Slider::create( 
            [
            'name' => $request->slider_name,
            'image'=>$finalName,            
            'priority' => $request->priority
            ] 
            ); 
        if($user==true){
            return response()->json(['message'=>"Slider Added"],200); 
        } else {
            return response()->json(['message'=>"Slider Not Added"],400); 
        }
    }
}
