<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CugController;
use App\Http\Controllers\DatasimController;
use App\Http\Controllers\Auth\AuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::middleware('auth:sanctum')->group(function () {
//     Route::resource('cugs', CugController::class);
//     Route::resource('datasims', DatasimController::class);
// });
Route::resource('cugs', CugController::class);
Route::resource('datasims', DatasimController::class);

route::post('register',[AuthController::class,'register']);
route::post('login',[AuthController::class,'login']);
Route::post('logout', [AuthController::class,'logout'])->middleware('auth:sanctum');