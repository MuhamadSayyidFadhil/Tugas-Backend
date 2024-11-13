<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';
    protected $fillable = ['name','gender','phone','address','email','status','hired_on'];
    public $timestamps = false;
}
