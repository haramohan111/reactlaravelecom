<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
Use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Cookie;

class UserController extends Controller
{
    // 	public function __construct()
    // {
    //   $this->middleware('guest:admin-api',['except' => ['logout']]);
    // }

    public function login(Request $request)
    {
    	// if(!$token = auth('api')->attempt($request->only('email','password'))){
    	// 	return response([
     //          'message'=>'invalid'
    	// 	],Response::HTTP_UNAUTHORIZED);
    	// }

    	$attr = $request->validate([
        'email' => 'required|string|email|',
        'password' => 'required|string|min:6'
         ]);

    	if (!Auth::guard('front-api')->attempt($attr)) {
        return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        $user = Auth::user();
          
    	$token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt',$token,60*24);
        
        return response([
           'message'=> $token
        ]);
    }

    public function User(){
       // $token = $request->bearerToken();
       // dd($token);
    	//dd("kk");
    	return Auth::user();
    }
    public function logout(Request $request){
        $cookie = Cookie::forget('jwt');
        Auth::guard('web')->logout();
          // $val = $request->cookie('jwt');
       // echo $val;
        return response([
           'message'=> 'Success'
        ])->withCookie($cookie);
        // Session::flush();
        // return Auth::logout();

    }
}
