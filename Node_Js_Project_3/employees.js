const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 name","salary":2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('json dosya oluşturuldu');
})

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('json dosyasi okundu');
})

fs.writeFile('employees.json', '{"name": "Employee 2 name","salary":9000}', 'utf8', (err) => {
    if (err) console.log(err)
    console.log('veri güncellendi');
})

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err)
    console.log('dosya silindi');    
})