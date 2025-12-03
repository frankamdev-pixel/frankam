<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // permissions basiques (exemples)
        Permission::firstOrCreate(['name' => 'manage users']);
        Permission::firstOrCreate(['name' => 'create courses']);
        Permission::firstOrCreate(['name' => 'edit courses']);
        Permission::firstOrCreate(['name' => 'delete courses']);
        Permission::firstOrCreate(['name' => 'view courses']);

        // rôles
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $teacher = Role::firstOrCreate(['name' => 'teacher']);
        $student = Role::firstOrCreate(['name' => 'student']);

        // assigner permissions (exemple simple)
        $admin->givePermissionTo(Permission::all());
        $teacher->givePermissionTo(['create courses', 'edit courses', 'view courses']);
        $student->givePermissionTo(['view courses']);
    }
}
