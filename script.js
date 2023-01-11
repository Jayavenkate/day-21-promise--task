// 1.A Bíblia Digital API
let book=document.getElementById('book')
var book_url='https://www.abibliadigital.com.br/api/books'

async function book_fetching(){
    try{
        var url_fetch=await fetch(book_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
   res.forEach((books)=>{
    let li =document.createElement('h3')
    li.innerText=books.name
    book.appendChild(li)
    let hi=document.createElement('p')
    hi.innerText=books.author
    book.appendChild(hi)
    let vi= document.createElement('h5')
    vi.innerText=books.chapters
    book.appendChild(vi)
   })
    }
    catch(err){
        console.log(err);
        console.log(error);
        }   
}
book_fetching()
// ---------------------------------------
// 2.Public holidays
let coin= document.getElementById('coin')
var coin_url='https://date.nager.at/api/v3/publicholidays/2017/AT'

async function coin_fetching(){
    try{
        var url_fetch=await fetch(coin_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
    res.forEach((coins)=>{
        let li =document.createElement('h3')
        li.innerText=coins.name
        coin.appendChild(li) 
        let hi =document.createElement('h3')
        hi.innerText=coins.date
        coin.appendChild(hi)
    })
  
}
    catch(err){
        console.log(err);
        console.log(error);
        }   
}
coin_fetching()
// ------------------------------

// 3.Brazilian Vehicles and Prices
let vehicle=document.getElementById('vehicle')
let calender_url=' https://parallelum.com.br/fipe/api/v1/carros/marcas'


async function calender_fetching(){
    try{
        var url_fetch=await fetch(calender_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
    res.forEach((vehicles)=>{
        let li =document.createElement('h3')
        li.innerText=vehicles.nome
        vehicle.appendChild(li) 
        let hi =document.createElement('p')
        hi.innerText=vehicles.codigo
        vehicle.appendChild(hi)
    })
}
    
catch(err){
    console.log(err);
    console.log(error);
    }   
}
    calender_fetching()
