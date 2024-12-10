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

fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json));

readData();
async function readData() {
    let myObject = await fetch('https://fakestoreapi.com/products');
    let objectInfo = await myObject.json();
    showProducts(objectInfo);
}

function showProducts(product){
    const table = document.getElementById('displayTable');
    //console.log(product);
    for (let i=0; i<product.length; i++){
        let productDetails = product[i];
        const row = table.insertRow();
        row.insertCell().innerText = productDetails.title;
        row.insertCell().innerText = productDetails.description;
        row.insertCell().innerText = '$'+productDetails.price;
        let img = document.createElement('img');
        img.setAttribute('style', 'width: 150px; height: 150px');
        img.src = productDetails.image;
        row.insertCell().appendChild(img);
    }
}

/*let jeweleryBtn = document.getElementById('jewelery');
jeweleryBtn.addEventListener('click', showLimitedProducts);

readData();
async function readData() {
    let myObject = await fetch('https://fakestoreapi.com/products/category/jewelery');
    let objectInfo = await myObject.json();
    showLimitedProducts(objectInfo);
}

function showLimitedProducts(product){
    const table = document.getElementById('displayTable');
    table.innerHTML = '';
    console.log(product);
    for (let i=0; i<product.length; i++){
        let productDetails = product[i];
        const row = table.insertRow();
        if(productDetails.category == jewelery){
            console.log(product);
            row.insertCell().innerText = productDetails.title;
            row.insertCell().innerText = productDetails.description;
            row.insertCell().innerText = '$'+productDetails.price;
            let img = document.createElement('img');
            img.setAttribute('style', 'width: 150px; height: 150px');
            img.src = productDetails.image;
            row.insertCell().appendChild(img);
        }
        else{''}
    }
}*/