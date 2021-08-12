<?php

namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Cookie;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }

    public function handle(Request $request, Closure $next, ...$guards)
    {
       // if($request->header('authorization')){
       //          return response([
       //             'status'=>400,
       //          ]);
       // }
       // if($request->segment(2) == 'admin'){
         
        // if($jwt = Cookie::get('jwt')){
        //  dd($jwt);
        //     $request->headers->set('Authorization','Bearer '.$jwt);
        // }
        // if($request->header('User-Agent')){
        // if($request->session()->has('token')){
///dd(session('token'));

            //$request->headers->set('Authorization','Bearer '.session('token'));

           //  $response = $next($request);
           //  $admin = Auth::guard('admin-api')->user();

           //  $cookies = $admin->refreshToken();
           //   return $response
           // // ->cookie($cookies['access_token'])
           //  ->cookie($cookies['refresh_token']);
        // $admin = Auth::guard('admin-api')->user();
        // $admin->tokens()->delete();
        //$admin->tokens()->delete();
        //$token = $admin->createToken('token')->plainTextToken;
        //$token = $admin->tokenCan('server:update');
        //$token = $admin->tokens()->where('id', $tokenId)->update();
        // $token = session('token');    
        // $minute=100;
        // $res = $next($request);
        // return $res->cookie('jwt',$token,$minute);
        // return response()->withcookie($cookie);
        //return response()->json(['token' => $user->createToken($user->name)->plainTextToken]);
    // $time = 1; //One day
    // $res = $next($request);
    // return $res->cookie('jwt', $token, $time, "/");
      //  }else{
  
            //$request->headers->set('Authorization','Bearer ');
            // return response([
            //        'status'=>200,
            //     ]);
           // return redirect('admin');
      //  }
        // }else{
        //        return response([
        //            'status'=>400,
        //            'message'=>'Bad request'
        //         ]);
        // }
       // }
        $this->authenticate($request,$guards);

        return $next($request);

    }    
}
