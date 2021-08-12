<?php

namespace App\Models\Api\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListSubcategory extends Model
{
    use HasFactory;

   protected $table="list_subcategories";

    protected $fillable = [
    	'category_id',
    	'subcategory_id',
        'listsubcategory_name',
        'priority',
    ];
}
