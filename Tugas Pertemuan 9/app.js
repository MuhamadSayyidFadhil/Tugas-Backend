const { index, store, update, destroy } = require('./Controller/fruitController');

const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  index();
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(0, "Kelapa");
  index();
  console.log("\nMethod destroy - Menghapus data 0");
  destroy(0);
  index();
};

main();
