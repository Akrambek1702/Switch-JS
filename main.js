// let num = 20;       


// switch(num){
//     case 13:
//         console.log('Raqam 13ga teng!');
//     break;    
//     case 20: 
//         console.log('Raqam 20ga teng!');
//     break;
//     case 12:    
//         console.log('Raqam 12ga teng');
//     break;       
// } 


let num1 = Number(prompt('Birinchi Sonni kiriting!')),   
    num2 = Number(prompt('ikkinchi Sonni kiriting!')),
    action = prompt('Amalni kiriting!');


switch(action){
    case '+':
        document.querySelector('#Count').innerHTML = (num1 + num2);
    break;
    case '-':
        document.querySelector('#Count').innerHTML = (num1 - num2);
    break;
    case '*':
        document.querySelector('#Count').innerHTML = (num1 * num2);
    break;
    case '/':
        document.querySelector('#Count').innerHTML = (num1 / num2);
    break;  
    default:
    alert(' Notog`ri amal kiritdingiz');
    break;                 
}


// let users = []


// function createUser() {
//     let ism = prompt('ism kiriting'),
//         yosh =  Number(prompt('yoshni kiriting'));


//     let user = {
//         name: ism,  
//         age: yosh
//     }
//     users.push(user);
// }


// for(let t = 0; t < 5; t++){
//     createUser();
// }
// console.log(users);


// function GMUzbekistan(nomi, Rang, sana,){
//     return {
//         marka: nomi,
//         color: Rang,
//         date: sana,
//     }
// }

// let malibu = GMUzbekistan('Malibu', 'qora', '12.02.2021');

// console.log(malibu)


// function laptops(brand, rang, ozu, ssd, Hdd){
//     return {
//         marka: brand,
//         color: rang,
//         Storage: ozu,
//         isSSD: ssd,
//         isHDD: Hdd
//     }
// }

// let asus = laptops('ASUS', 'qora', '4gb', true, false),
//     Dell = laptops('Dell', 'qora', '8gb', false, true),
//     Lenovo = laptops('Lenovo', 'oq', '2gb', false, true),
//     hp = laptops('hp', 'kulrang', '6gb', false, true),
//     macbook = laptops('Macbook', 'Silver', '16gb', true, true),
//     acer = laptops('Acer Aspire', 'kulrang', '8gb', true, true)
 
// console.log( asus, Dell, Lenovo, hp, macbook, acer)