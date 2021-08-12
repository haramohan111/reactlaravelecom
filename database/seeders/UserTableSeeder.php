<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
//use Illuminate\Database\Eloquent\Factories\Factory;
//use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       //User::factory()->count(50);
    	//factory(User::class,10)->create();not used in laravel8
    	// \App\Models\User::factory()->count(300000)->create(); 

    DB::table('users')->insert([
             'name'=>'user',
             'email'=>'user@gmail.com',
             'password'=>Hash::make('123123'),
            'created_at'=>date('y-m-d H:i:s'),
            'updated_at'=>date('y-m-d H:i:s'),
        ]);

    }
}
