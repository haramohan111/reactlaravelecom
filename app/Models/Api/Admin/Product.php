<?php

namespace App\Models\Api\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table="products";

    protected $fillable = [
        'seller_id',
        'skucode',
        'category_id',
        'subcategory_id',
        'listsubcategory_id',
        'product_title',
        'product_image',
        'priority',
        'stock',
        'size',
        'color',
        'mrp',
        'selling_price',
        'height',
        'width',
        'length'
    ];

}
