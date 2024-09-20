// Async - Await yapısı ES8 ile birlikte gelmiştir ve Promise yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır.
// Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner.
// Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar 
// async fonksiyonunun çalışması bekletilir.


function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('veriler alınmaya çalışıyor');

        if (data) {
            resolve('veriler alındı');
        } else {
            reject('veriler alınamadı');
        }
    })
}

function cleanData(receiveData) {
    return new Promise((resolve, reject) => {
        console.log('veriler düzenleniyor');

        if (receiveData) {
            resolve('veriler düzenlendi');
        } else {
            reject('veriler düzenlenemedi');
        }
    })
}

// getData(true)
//     .then(result =>{
//         console.log(result);
//         return cleanData(false);
//     }).then(result =>{
//         console.log(result);
//     }).catch(error =>{
//         console.log(error);
//     })


//Async-await

// async function processData() {

//     try {
//         const receiveData = await getData(true);
//         console.log(receiveData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// processData();


const books = [
    { name: 'kitap 1', author: 'yazar 1' },
    { name: 'kitap 2', author: 'yazar 1' },
    { name: 'kitap 3', author: 'yazar 1' },
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject('bir hata oluştu');

    });

    return promise1;

};

// addBook({ name: 'Kitap 10', author: 'yazar 10' })
//     .then(() => {
//         console.log('yeni liste');
//         listBooks();
//     }).catch((error) => {
//         console.log(error);
//     })


async function showBooks() {
    try {
        await addBook({ name: 'Kitap 12', author: 'yazar 12' })
        listBooks();
    }

    catch (error) {
        console.log(error);
    }

}


showBooks();