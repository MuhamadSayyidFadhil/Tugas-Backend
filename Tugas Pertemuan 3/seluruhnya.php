<?php
class Animal {
    private $animals;

    public function __construct() {
        $this->animals = ["Kucing", "Capybara", "Itik"];
    }

    public function index() {
        echo "Nama - Nama Hewan:\n";
        foreach ($this->animals as $animal) {
            echo "$animal\n";
        }
    }
    
    public function store($animal) {
        array_push($this->animals, $animal);
        echo "$animal telah ditambahkan.\n";
    }

    public function update($index, $animalBaru) {
        if (isset($this->animals[$index])) {
            $animalLama = $this->animals[$index];
            $this->animals[$index] = $animalBaru;
            echo "$animalLama diupdate menjadi $animalBaru.\n";
        } else {
            echo "Hewan tidak ditemukan$index.\n";
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

$animal = new Animal(); 

$animal->index();

// Menambahkan hewan baru
$animal->store("Kudanil");
$animal->index(); 

// Memperbarui hewan
$animal->update(2, "Kecoa");
$animal->index();


$animal->destroy(0);
$animal->index();
