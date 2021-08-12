<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\SubcategoryController;
use App\Http\Controllers\Api\Admin\ListSubcategoryController;
use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Api\Admin\SliderController;
use App\Http\Controllers\Api\Front\NewProductController;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Route::get('user','api\admin\UserController@allUser');
//Route::group(['namespace' => 'App\Http\Controllers\Api'], function () {
//});

//public routes
// Route::post('/login',[App\Http\Controllers\UserController::class, 'login']);
Route::post('/admin/login',[App\Http\Controllers\Api\Admin\AdminController::class, 'login']);



//protected routes
Route::get('/admin/logout',[AdminController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function(){

Route::get('/admin/checkauth',[AdminController::class, 'checkAuth']);

Route::get('/data',[AdminController::class, 'data']);


Route::get('/logout',[UserController::class, 'logout']);
Route::get('/admin/user',[UserController::class, 'allUser']);

Route::post('/admin/category',[CategoryController::class, 'create']);
Route::get('/admin/categoryview',[CategoryController::class, 'show']);

Route::post('/admin/subcategory',[SubcategoryController::class, 'create']);
Route::get('/admin/subcategoryview',[SubcategoryController::class, 'show']);
Route::get('/admin/subcateview/{id}',[SubcategoryController::class, 'SubCatview']);

Route::post('/admin/listsubcategory',[ListSubcategoryController::class, 'create']);
Route::get('/admin/listsubcateview/{id}',[ListSubcategoryController::class, 'ListSubcateView']);

Route::post('/admin/product',[ProductController::class, 'create']);
Route::get('/admin/productview',[ProductController::class, 'index']);

Route::post('/admin/addslider',[SliderController::class, 'create']);
Route::get('/admin/sliderview',[SliderController::class, 'index']);
Route::post('/admin/addnewproductmenu',[NewProductController::class, 'addmenu']);


});


//front
Route::get('/menu',[App\Http\Controllers\Api\Front\CategoryController::class, 'index']);


Route::post('login', [App\Http\Controllers\Api\Front\UserController::class, 'login']);
Route::post('register', [ApiController::class, 'register']);
Route::get('newproduct',[NewProductController::class, 'index']);
Route::get('menuid',[NewProductController::class, 'menuid']);


// Route::group([

//     'middleware' => 'front-api',
//     'prefix' => 'auth'

// ], function ($router) {
// 	Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');

// });


