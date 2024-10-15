<?php
class Animal {
    private $animals;

    public function __construct() {
        $this->animals = ["Kucing", "Capybara", "Itik"];
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

$animal->destroy(0);
