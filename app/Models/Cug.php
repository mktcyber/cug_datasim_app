<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cug extends Model
{
    use HasFactory;
    protected $fillable = ['Employee_id', 'Employee_name','Employee_cug_number'];
}
