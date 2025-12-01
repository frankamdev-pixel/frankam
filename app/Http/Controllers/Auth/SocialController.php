<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SocialController extends Controller
{
    public function redirect($provider)
    {
        if (!in_array($provider, ['github','google'])) {
            abort(404);
        }

        if ($provider === 'github') {
            return Socialite::driver('github')->scopes(['read:user','user:email'])->redirect();
        }

        return Socialite::driver($provider)->redirect();
    }

    public function callback(Request $request, $provider)
    {
        if (!in_array($provider, ['github','google'])) {
            abort(404);
        }

        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return redirect('/login')->withErrors('Connexion impossible, réessaie.');
        }

        // email fallback: GitHub peut renvoyer null, on vérifie
        $email = $socialUser->getEmail() ?? $socialUser->user['email'] ?? null;

        if (!$email) {
            return redirect('/login')->withErrors('Email non fourni par le provider.');
        }

        // Trouver ou créer user
        $user = User::where('email', $email)->first();

        if (!$user) {
            $user = User::create([
                'name' => $socialUser->getName() ?? $socialUser->getNickname() ?? $email,
                'email' => $email,
                'password' => bcrypt(Str::random(24)), // mot de passe aléatoire
                'provider' => $provider,
                'provider_id' => $socialUser->getId(),
                'avatar' => $socialUser->getAvatar(),
            ]);
        } else {
            // Mettre à jour le provider info si besoin
            $user->update([
                'provider' => $provider,
                'provider_id' => $socialUser->getId(),
                'avatar' => $socialUser->getAvatar(),
            ]);
        }

        Auth::login($user, true);

        // Redirige vers la home Inertia (ajuste la route si tu veux)
        return redirect()->intended('/');
    }
}
