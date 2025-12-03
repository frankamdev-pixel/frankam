<?php

declare(strict_types=1);

use App\Http\Controllers\FormationController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\ProfileController;

Route::get('/', [HomeController::class,'index'])->name('home');
Route::get('/formation', [FormationController::class,'index'])->name('formation');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});



//profile

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
});



Route::get('/auth/redirect/{provider}', [SocialController::class, 'redirect'])->name('social.redirect');
Route::get('/auth/callback/{provider}', [SocialController::class, 'callback'])->name('social.callback');
require __DIR__.'/settings.php';
