<<<<<<< HEAD
<?php
class Animal {
    private $animals;

    public function __construct() {
        $this->animals = ["Kucing", "Anjing", "Ayam"];
    }

    public function update($index, $animalBaru) {
        if (isset($this->animals[$index])) {
            $animalLama = $this->animals[$index];
            $this->animals[$index] = $animalBaru;
            echo "$animalLama diupdate menjadi $animalBaru.\n";
        } else {
            echo "Hewan tidak ditemukan $index.\n";
        }
    }
}

$animal = new Animal();

$animal->update(2, "kecoa");
=======
<?php
class Animal {
    private $animals;

    public function __construct() {
        $this->animals = ["Kucing", "Anjing", "Ayam"];
    }

    public function update($index, $animalBaru) {
        if (isset($this->animals[$index])) {
            $animalLama = $this->animals[$index];
            $this->animals[$index] = $animalBaru;
            echo "$animalLama diupdate menjadi $animalBaru.\n";
        } else {
            echo "Hewan tidak ditemukan $index.\n";
        }
    }
}

$animal = new Animal();

$animal->update(2, "kecoa");
>>>>>>> 9c1689a (Tugas Backend Pertemuan 4)
