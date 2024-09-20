//  Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir.
//  Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin,
//  Olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları
//  .then(), olumsuz sonuçları da .catch() ile karşılar.

// const promise1=new Promise((resolve,reject)=>{
//     resolve('veriler alindi');
//     reject('baglanti hatasi');
// });

// //console.log(promise1);

// promise1
//     .then(value=>{
//         console.log(value);
//     }).catch(error=>{
//         console.log(error);
//     });             


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

const addBook = (newBook)=>{

    const promise1=new Promise ((resolve,reject)=>{
        books.push(newBook);
        resolve(books);
        //reject('bir hata oluştu');

    });

    return promise1;
    
};

addBook({name: 'Kitap 10', author:'yazar 10'})
    .then(()=>{
        console.log('yeni liste');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    })