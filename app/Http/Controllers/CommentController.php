<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        $comments = [
            ['id' => 1, 'author' => 'Dewi', 'text' => 'Kopi di sini enak banget, recommended!', 'created_at' => '2025-05-15'],
            ['id' => 2, 'author' => 'Budi', 'text' => 'Suasana nyaman, pelayanan ramah.', 'created_at' => '2025-05-14'],
            ['id' => 3, 'author' => 'Sari', 'text' => 'Harga cocok dengan kualitas kopinya.', 'created_at' => '2025-05-13'],
            ['id' => 4, 'author' => 'Andi', 'text' => 'Tempatnya strategis, gampang dijangkau.', 'created_at' => '2025-05-12'],
        ];

        return view('comments.index', compact('comments'));
    }
}
