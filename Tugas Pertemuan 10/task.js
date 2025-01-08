const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "Windows Muhamad Sayyid Fadhil-0110223061";
        resolve(result);
      }, 3000);
    });
  };
  
  const main = async () => {
    console.log("Memulai proses download...");
    const result = await download();
    showDownload(result);
  };
  
  main();
  