const args=process.argv.slice(2);
 //Node.js'de process, Node.js çalışma sürecine (runtime) erişim sağlayan, global olarak tanımlı bir nesnedir.
// Yani, process nesnesi, Node.js uygulamanızın çalışma durumu ve ortamı hakkında bilgi sağlar.
// Bu çalışma sürecini kontrol etmek için kullanılan araçları içerir.

function alanHesapla(yaricap){
    const pi=3.14;
    let alan=pi*yaricap*yaricap;
    console.log(alan);
}
alanHesapla(args[0]);
