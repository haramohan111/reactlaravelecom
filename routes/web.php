<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', function () {
    return redirect("admin/login");
});

Route::get('/{path?}', function () {
    return view('website-home');
})->where('path', '[^admin,^vender]*');


Route::get('/admin/{path?}', function () {
    return view('admin-home'); // or wherever your React app is bootstrapped.
})->where('path', '.*');

Route::get('/vender/{path?}', function () {
    return view('vender-home'); // or wherever your React app is bootstrapped.
})->where('path', '.*');
// Route::middleware('auth:sanctum')->group(function(){
// Route::get('/{path?}', function($path = null){        
//     return View::make('dashboard');   
//   })->where('path', '.*');
// });
// Route::get('/{admin?}', function($path = null){        
//     return View::make('dashboard');   
//   })->where('path', '.*');

// Route::get('/{path?}', function($path = null){        
//     return View::make('welcome');   
//   })->where('path', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/admin/logout',[App\Http\Controllers\Api\Admin\AdminController::class, 'logout']);
