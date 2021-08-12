<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
             'email'=>'admin@gmail.com',
             'password'=>Hash::make('123123'),
            'created_at'=>date('y-m-d H:i:s'),
            'updated_at'=>date('y-m-d H:i:s'),
        ]);

    }
}
