
const arguments =process.argv.slice(2);

function showPrimeNumbers(lowNumber,highNumber){
    for (let i = lowNumber; i < highNumber; i++) {
        let isPrime=true;
        for(let j=2; j<=i; j++){
            if(i%j===0 && j!==i){
                isPrime=false;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0]*1,arguments[1]*1);

console.log(process.argv.slice(2)); //Bize O an ki işlemle ilgili birçok bilgiler verir.
// argv yapısı komut satırından girilen argümanları array olarak bize sunar.
// slice metodu ile de parçalama işlemi yaparız.