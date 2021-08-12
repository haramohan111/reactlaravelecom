<?php

namespace App\Models\Api\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $table="subcategories";

    protected $fillable = [
        'category_id',
        'subcategory_name',
        'priority',
    ];


    // public function getCategoryRelation(){
    // 	return $this->belongsTo('App\Models\Api\Admin\Subcategory','category_id','id');
    // }
}
