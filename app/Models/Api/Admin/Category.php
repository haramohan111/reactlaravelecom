<?php

namespace App\Models\Api\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table="categories";

    protected $fillable = [
        'category_name',
        'priority',
    ];

    // public function getCategoryRelation(){
    // 	return $this->hasMany('App\Models\Api\Admin\Subcategory','category_id','id');
    // }
}
