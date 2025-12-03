<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

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
        Inertia::share([
    'auth' => [
        'user' => fn () => auth()->user()
            ? auth()->user()->only('id', 'name', 'email') + [
                'roles' => auth()->user()->getRoleNames()
            ]
            : null,
    ],
]);
        if (env('APP_ENV') === 'production') {
            \URL::forceScheme('https');
        }

        Validator::excludeUnvalidatedArrayKeys();
        Model::automaticallyEagerLoadRelationships();
    }
}
