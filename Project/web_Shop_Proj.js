/*const home = document.getElementById('navHome');
const shop = document.getElementById('navShop');
const deals = document.getElementById('navDeals');
const basket = document.getElementById('navBasket');
const about = document.getElementById('navAbout');

const navBarElem = document.querySelectorAll('.navBar');

/*navBar.forEach((li)=>{
    li.addEventListener('click', ()=>{
        navBar.forEach((otherLi)=>{
            otherLi.classList.remove('active');
        });

        li.classList.add('active');
    });
});*/

/*navBarElem.forEach(navBar => {
    navBar.addEventListener('click', function selected(event) {
        console.log('?');
        navBar.classList.remove('active');
    });
    navBar.classList.add('active');
});*/

/*function activePage(navBar){
    for (let i=0; i<navBar.length; i++){
        console.log(i);
        navBar[i].classList.remove('active');
    }
    //navBar.classList.add('active');
}

for (const navBar of navBarElem){
    navBar.addEventListener('click', function onSelect(event){
        navBar.classList.add('active');
        console.log(navBar.id);
    });
}*/

let basket=[];

readData();
async function readData() {
    let myObject = await fetch('https://fakestoreapi.com/products');
    let objectInfo = await myObject.json();
    showProducts(objectInfo);
}

function showProducts(product){
    const table = document.getElementById('displayTable');
    const tableBody = table.querySelector('tbody');
    for (let i=0; i<product.length; i++){
        let productDetails = product[i];
        let row = tableBody.insertRow();
        row.insertCell().innerText = productDetails.title;
        row.insertCell().innerText = productDetails.description;
        row.insertCell().innerText = '$'+productDetails.price;
        let img = document.createElement('img');
        img.setAttribute('style', 'width: 150px; height: 150px');
        img.src = productDetails.image;
        row.insertCell().appendChild(img);
        let btn = document.createElement('button');
        btn.innerText = 'Add to Cart';
        row.insertCell().appendChild(btn);
        btn.addEventListener('click', addToCart)
        function addToCart(){
            basket.push(productDetails);
            console.log(basket);
        }
    }
}


//The following repeating blocks of code are very unoptomized and should be brought into one function. Will they be? Not likely at this point X_X
const jeweleryBtn = document.getElementById('jewelery');
jeweleryBtn.addEventListener('click', showLimitedProducts);

function showLimitedProducts(){
    readData();
    async function readData() {
        let myObject = await fetch('https://fakestoreapi.com/products/category/jewelery');
        let jeweleryInfo = await myObject.json();
        jeweleryProducts(jeweleryInfo);
        //console.log(jeweleryInfo);
    }
      
    function jeweleryProducts(shiny){
        const table = document.getElementById('displayTable');

        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML='';

        for (let i=0; i<shiny.length; i++){
            let productDetails = shiny[i];
            let row = tableBody.insertRow();
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
            let btn = document.createElement('button');
            btn.innerText = 'Add to Cart';
            row.insertCell().appendChild(btn);
            btn.addEventListener('click', addToCart)
            function addToCart(){
                basket.push(productDetails);
                console.log(basket);
            }
        }
    } 
}

const electronicsBtn = document.getElementById('electronics');
electronicsBtn.addEventListener('click', showElectronics);

function showElectronics(){
    readData();
    async function readData() {
        let myObject = await fetch('https://fakestoreapi.com/products/category/electronics');
        let electronicsInfo = await myObject.json();
        electronicsProducts(electronicsInfo);
        //console.log(electronicsInfo);
    }
      
    function electronicsProducts(shock){
        const table = document.getElementById('displayTable');

        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML='';

        for (let i=0; i<shock.length; i++){
            let productDetails = shock[i];
            let row = tableBody.insertRow();
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
            let btn = document.createElement('button');
            btn.innerText = 'Add to Cart';
            row.insertCell().appendChild(btn);
            btn.addEventListener('click', addToCart)
            function addToCart(){
                basket.push(productDetails);
                console.log(basket);
            }
        }
    } 
}

const apparelMensBtn = document.getElementById('apparelMen');
apparelMensBtn.addEventListener('click', showApparelMen);

function showApparelMen(){
    readData();
    async function readData() {
        let myObject = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        let apparelMenInfo = await myObject.json();
        electronicsProducts(apparelMenInfo);
        //console.log(apparelMenInfo);
    }
      
    function electronicsProducts(mens){
        const table = document.getElementById('displayTable');

        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML='';

        for (let i=0; i<mens.length; i++){
            let productDetails = mens[i];
            let row = tableBody.insertRow();
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
            let btn = document.createElement('button');
            btn.innerText = 'Add to Cart';
            row.insertCell().appendChild(btn);
            btn.addEventListener('click', addToCart)
            function addToCart(){
                basket.push(productDetails);
                console.log(basket);
            }
        }
    } 
}

const apparelWomenBtn = document.getElementById('apparelWomen');
apparelWomenBtn.addEventListener('click', showApparelWomen);

function showApparelWomen(){
    readData();
    async function readData() {
        let myObject = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        let apparelWomenInfo = await myObject.json();
        electronicsProducts(apparelWomenInfo);
        //console.log(apparelWomenInfo);
    }
      
    function electronicsProducts(womens){
        const table = document.getElementById('displayTable');

        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML='';

        for (let i=0; i<womens.length; i++){
            let productDetails = womens[i];
            let row = tableBody.insertRow();
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
            let btn = document.createElement('button');
            btn.innerText = 'Add to Cart';
            row.insertCell().appendChild(btn);
            btn.addEventListener('click', addToCart)
            function addToCart(){
                basket.push(productDetails);
                console.log(basket);
            }
        }
    } 
}


const shopAllBtn = document.getElementById('navShop');
shopAllBtn.addEventListener('click', showAllProducts);


function showAllProducts(product){
    readData();
    async function readData() {
    let myObject = await fetch('https://fakestoreapi.com/products');
    let objectInfo = await myObject.json();
    showAll(objectInfo);
    }
    function showAll(product){
        const table = document.getElementById('displayTable');
        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML='';
        for (let i=0; i<product.length; i++){
            let productDetails = product[i];
            let row = tableBody.insertRow();
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
            let btn = document.createElement('button');
            btn.innerText = 'Add to Cart';
            row.insertCell().appendChild(btn);
            btn.addEventListener('click', addToCart)
            function addToCart(){
                basket.push(productDetails);
                console.log(basket);
            }
        }
    }
}

const cart = document.getElementById('navBasket');
cart.addEventListener('click', showCart);

function showCart(){
    console.log(basket);
    const table = document.getElementById('userCart');
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML='';
    let showdiv = document.getElementById('baskdiv')
    showdiv.style.display='block';
    for (let i=0; i<basket.length; i++){
        let item = basket[i];
        let row = tableBody.insertRow();
        row.insertCell().innerText = item.title;
        row.insertCell().innerText = '$'+item.price;
        let img = document.createElement('img');
        img.setAttribute('style', 'width: 50px; height: 50px');
        img.src = item.image;
        row.insertCell().appendChild(img);
    }
}

const checkout = document.getElementById('checkout');
checkout.addEventListener('click', Buy)

function Buy(basket){
    for(let i=0; i<basket.length; i++){
        let item = basket[i];
        console.log(item.price);
    }
}