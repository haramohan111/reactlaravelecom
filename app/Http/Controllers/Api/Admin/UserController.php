<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function allUser(Request $request)
    {
       $q=$request->search;
       $user =User::where('name','like',"%$q%")->orderby("id","DESC")->paginate(15);
        // $user = User::when($r,function($query){
        // 	    $query->where('name','like',"%$r%");
        //       })->orderby("id","DESC")->paginate(7);
    	 return response($user,200);
    }

}
