const fs = require('fs');

//DOSYA OKUMAK

fs.readFile('password.txt', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data);
    console.log('dosya başarili bir şekilde okundu');
})

//DOSYA YAZMAK/GÜNCELLEMEK

fs.writeFile('example.json', '{"name": "Lütfü","age": 24}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('json dosya oluşturuldu');
})

//VERİ EKLEMEK

fs.appendFile('example.txt', '\nKodlamaya devam', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('yeni veri eklendi');
})

//VERİ SİLMEK/DOSYA SİLMEK

fs.unlink('example.json',(err)=>{
    if(err) console.log(err);
    console.log('dosya silindi');
})

//KLASÖR OLUŞTURMAK

fs.mkdir('uploads/img',{recursive:true},(err)=>{
    if(err) console.log(err)
    console.log('klasör oluşturuldu');
})

//KLASÖR SİLMEK

fs.rmdir('uploads', { recursive: true }, (err) => {
    if (err) console.log(err)
    console.log('klasör silindi');
})

