<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class SubcategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subcategories')->insert([
            'category_id' => rand(1,10),
            'subcategory' => Str::random(10),
            'priority' => "1",
            'created_at'=>date('y-m-d H:i:s'),
            'updated_at'=>date('y-m-d H:i:s'),
        ]);
    }
}
