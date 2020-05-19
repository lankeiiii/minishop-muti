<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserWalletIncome extends Model
{
    protected $guarded = [];

    public function wallet()
    {
        return $this->belongsTo(UserWallet::class,"wallet_id");
    }
}
