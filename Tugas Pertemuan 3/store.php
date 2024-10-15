<?php
class Animal {
    private $animals;

    public function __construct() {
        $this->animals = ["Kucing", "Anjing", "Ayam"];
    }

    public function store($animal) {
        array_push($this->animals, $animal);
        echo "$animal telah ditambahkan ke daftar.\n";
    }
}


$animal = new Animal();

$animal->store("Kudanil");

