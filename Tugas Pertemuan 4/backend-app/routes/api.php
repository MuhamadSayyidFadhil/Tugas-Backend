<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/animals',function(){
//     echo "Menampilkan data animals";
// });

Route::get('/animals', [AnimalsController::class, 'index']);
Route::post('/animals', [AnimalsController::class, 'store']);
Route::put('/animals/{index}', [AnimalsController::class, 'update']);
Route::delete('/animals/{index}', [AnimalsController::class, 'destroy']);



