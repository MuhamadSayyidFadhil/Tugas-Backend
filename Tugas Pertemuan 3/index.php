<<<<<<< HEAD
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
    
}

$animal = new Animal(); 

$animal->index();
=======
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
    
}

$animal = new Animal(); 

$animal->index();
>>>>>>> 9c1689a (Tugas Backend Pertemuan 4)
