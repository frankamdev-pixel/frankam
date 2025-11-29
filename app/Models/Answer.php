<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'answer_text', 'is_correct', 'meta'];

    protected $casts = [
        'is_correct' => 'boolean',
        'meta' => 'array',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
