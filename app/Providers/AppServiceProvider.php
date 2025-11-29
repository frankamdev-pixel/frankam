<?php

declare(strict_types=1);

namespace App\Providers;


use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Model;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
   public function boot(): void
{
    if (env('APP_ENV') === 'production') {
        \URL::forceScheme('https');
    }

    Validator::excludeUnvalidatedArrayKeys();
    Model::automaticallyEagerLoadRelationships();
}

    
}