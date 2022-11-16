<?php

use App\Http\Controllers\BookmarksController;
use Illuminate\Support\Facades\Route;

Route::apiResource('bookmarks', BookmarksController::class)
->except(['show', 'update'])
->middleware('auth');
