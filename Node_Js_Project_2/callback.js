
// Node.js'in asenkron yapısı üzerine konuştuğumuzda belirttiğimiz 2 temel konu vardı. 
// Node.js uzun süren işlemlerin tamamlanmasını beklemeden diğer işlere devam etmek ister. 
// Bunun haricinde ise uzun süren işlemler tamamlandığında, bu uzun süren işlemlere bağımlı olan diğer işlemlere devam etmek ister.
// Bu devam işlemler, uzun süren işlemin tamamlandığını nasıl bilecek? İşte burada callback devreye girer.


// console.log('1.görev');
// console.log('2.görev');
// console.log('3.görev');

// const function1=()=>{
//     console.log('Function 1 tamamlandı');
// }

// const function2=()=>{
//     console.log('Function 2 tamamlandı');
// }

// function2();
// function1();

// const function1=()=>{
//     console.log('Function 1 tamamlandı');
//     function2();
// }
// const function2=()=>{
//     console.log('Function 2 tamamlandı');
//     function3();
// }
// const function3=()=>{
//     console.log('Function 3 tamamlandı');
// }

// function1(); //İlk başta function 1 çalıştı ardından function1 in içine girdi sırasıyla 2 ve 3 ü çalıştırdı.


// const function1=()=>{
//     console.log('Function 1 tamamlandı');
//     function3();
// }
// const function2=()=>{
//     console.log('Function 2 tamamlandı');
// }
// const function3=()=>{
//     console.log('Function 3 tamamlandı');
//     function2();
// }

// function1();

//JS her zaman senkron olarak çalışır. Single Thread(aynı anda tek bir işlem yapabilmek).
//Node JS'in de asenkron yapısı vardır.


// let x=5;
// console.log(x);

// setTimeout(() => {
//     x=x+5;
//     console.log(x);
// },2000);

// x=x+5;
// console.log(x);


const books=[
    {name:'kitap 1', author: 'yazar 1'},
    {name:'kitap 2', author: 'yazar 1'},
    {name:'kitap 3', author: 'yazar 1'},
];

const listBooks=()=>{
    books.map(book =>{
        console.log(book.name);
    })
};

const addBook = (newBook,callback)=>{
    books.push(newBook);
    callback();
};

//listBooks();

addBook({name: 'Kitap 4', author:'yazar 4'} ,listBooks);
