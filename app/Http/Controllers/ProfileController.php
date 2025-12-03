<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function edit()
    {
        return Inertia::render('Test', [
            'user' => auth()->user()
        ]); 
    }

    public function update(Request $request)
    {
        $request->validate([
            'bio' => 'nullable|string|max:500',
            'avatar' => 'nullable|image|max:4048', // 4MB
        ]);

        $user = auth()->user();

        // Upload avatar si fourni
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = $path;
        }

        // Bio
        if ($request->bio !== null) {
            $user->bio = $request->bio;
        }

        $user->save();

        return back()->with('success', 'Profil mis à jour');
    }
}
