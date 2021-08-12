<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UserTableSeeder::class);
    	// for ($i=0; $i < 10; $i++) {
    	// $this->call(SubcategoryTableSeeder::class);
     //    }
        //$this->call(AdminTableSeeder::class);
    }
}
