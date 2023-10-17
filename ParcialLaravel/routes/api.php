<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\BandController;
use App\Http\Controllers\GenreController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/albums', [AlbumController::class, 'index']);
Route::post('/albums', [AlbumController::class, 'store']);
Route::put('/albums/{id}', [AlbumController::class, 'update']);
Route::delete('/albums/{id}', [AlbumController::class, 'destroy']);
Route::get('/albums/{id}', [AlbumController::class, 'show']);
Route::get('/albums-pdf', [AlbumController::class, 'pdf']);

Route::get('/bands', [BandController::class, 'index']);
Route::post('/bands', [BandController::class, 'store']);
Route::put('/bands/{id}', [BandController::class, 'update']);
Route::delete('/bands/{id}', [BandController::class, 'destroy']);
Route::get('/bands/{id}', [BandController::class, 'show']);
Route::get('/bands-pdf', [BandController::class, 'pdf']);

Route::get('/genres', [GenreController::class, 'index']);
Route::post('/genres', [GenreController::class, 'store']);
Route::put('/genres/{id}', [GenreController::class, 'update']);
Route::delete('/genres/{id}', [GenreController::class, 'destroy']);
Route::get('/genres/{id}', [GenreController::class, 'show']);
Route::get('/genres-pdf', [GenreController::class, 'pdf']);

