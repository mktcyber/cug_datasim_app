<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
		    'name' => 'admin',
		    'email' => 'sadmin@admin.com',
		    'password' => \Illuminate\Support\Facades\Hash::make('....'),
		    'is_permission' => 1
	    ]);

	    User::create([
		    'name' => 'Haddie',
		    'email' => 'haddie@test.com',
		    'password' => \Illuminate\Support\Facades\Hash::make('....'),
		    'is_permission' => 2
	    ]);
    }
}
