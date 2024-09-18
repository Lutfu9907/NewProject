const args=process.argv.slice(2);

function alanHesapla(yaricap){
    const pi=3.14;
    let alan=pi*yaricap*yaricap;
    console.log(alan);
}
alanHesapla(args[0]);
