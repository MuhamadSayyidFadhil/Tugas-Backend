<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    private $animals;

    public function __construct() {
        $this->animals = ['Bebek', 'Semut', 'Capybara'];
    }

    public function index() {
        echo "Nama - Nama Hewan:\n";
        foreach ($this->animals as $animal) {
            echo "$animal\n";
        }
    }

    public function store(Request $request){
        $animalBaru = $request->input('name');
        array_push($this->animals, $animalBaru);
        echo "Menambahkan hewan baru: $animalBaru\n";
    }

    public function update (Request $request, $index){
        $animalBaru = $request->input('name'); 
        if (isset($this->animals[$index])){
            $animalLama = $this->animals[$index];
            $this->animals[$index] = $animalBaru;
            echo "$animalLama diupdate menjadi $animalBaru.\n";
        } else {
            echo "Hewan tidak ditemukan pada index $index.\n";
        }
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            $animal = $this->animals[$index];
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
            echo "$animal telah dihapus.\n";
        } else {
            echo "Hewan tidak ditemukan pada index $index.\n";
        }
    }
}
