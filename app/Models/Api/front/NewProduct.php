<?php

namespace App\Models\Api\front;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewProduct extends Model
{
    use HasFactory;

    protected $table="addmenu";

    protected $fillable = [
        'menu_id'
    ];
}
