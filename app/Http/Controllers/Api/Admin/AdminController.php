<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Session;
use Cookie;
use Illuminate\Support\Str;


class AdminController extends Controller
{


    public function login(Request $request){
    	// if(!Auth::guard('admin-api')->attempt($request->only('email','password'))){
    	// 	return response([
     //          'message'=>'invalid'
    	// 	],Response::HTTP_UNAUTHORIZED);
    	// }

    	//return Auth::guard('admin-api')->user();
    	// return "ok";

    	$attr = $request->validate([
        'email' => 'required|string|email|',
        'password' => 'required|string|min:6'
         ]);

    	if (!Auth::guard('admin-api')->attempt($attr)) {
        return response()->json(['error' => 'Unauthorized'], 401);
        }
         //return response()->json(['error' => 'success'], 200);
        $admin = Auth::guard('admin-api')->user();

        $token = $admin->createToken('token')->plainTextToken;
        //dd(Auth::guard('admin-api')->user()->id);
         $minute=100;
         $cookie = cookie('jwt',$token,$minute);
        //dd($cookie);
       // $cookie = setcookie('jwt', $token, time() + (86400 * 30), "/");
        //$randomString = Str::random(30).rand().Str::random(30);
    
       // session(['token'=>$token]);

        return response([
           'status'=>200,
           'authtoken'=>$token
        ])->withcookie($cookie);

    }

    public function data(Request $request){
      dd("hh");
    	  // $val = $request->cookie('jwt');
       //     echo $val;
      //dd(Auth::guard('admin-api')->user());
    	return Auth::user();
    }

    public function logout(Request $request){
    	//tcookie("jwt", "", time() - 3600);
    	// if($request->hasCookie('jwt')){

    	// 	dd("hi");
    	// }else{
    	// 	dd("jj");
    	// }
      //dd("jj");
       //dd(auth()->user());
      $admin = Auth::guard('admin-api')->user();
      
      $jwt = Cookie::get('jwt');
      if($jwt){
      $admin->tokens()->delete();
      $cookie = Cookie::forget('jwt');
      return response([
           'status'=> 200
        ])->withcookie($cookie);
      }else{
        return response([
           'status'=> 400
        ]);
      }
      //dd($request->user());
      //Session::forget('token');


        // if($request->session()->has('token')){


        // $request->session()->forget('token');
        //                         return response([
        //            'status'=>400,
        //         ]);
        // }


    	//$cookie =Cookie::queue(Cookie::forget('jwt'));    	//$cookie = $request->forget('jwt');
    	//Session::forget('jwt');
    	//Auth::guard('web')->logout();
    	  // $val = $request->cookie('jwt');
       // echo $val;
    	// return response([
     //       'message'=> 'Success'
     //    ]);
    	// Session::flush();
    	// return Auth::logout();

    }

    public function checkAuth(){
               //dd(auth()->user());
        if(auth()->user()){
//dd(session('token'));
        return response([
                   'status'=>200,
                ]);

        }else{
  
        return response([
                   'status'=>400,
            ]);
        }

    }

}
