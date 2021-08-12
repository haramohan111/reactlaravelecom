<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("seller_id");
            $table->string("skucode");
            $table->string("category_id");
            $table->string("subcategory_id");
            $table->string("listsubcategory_id");
            $table->string("product_title");
            $table->string("product_image");
            $table->string("priority");
            $table->string("stock");
            $table->string("size");
            $table->string("color");
            $table->string("mrp");
            $table->string("selling_price");
            $table->string("height");
            $table->string("width");
            $table->string("length");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
