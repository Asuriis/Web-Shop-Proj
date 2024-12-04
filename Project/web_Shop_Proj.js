const home = document.getElementById('navHome');
const shop = document.getElementById('navShop');
const deals = document.getElementById('navDeals');
const basket = document.getElementById('navBasket');
const contact = document.getElementById('navContact');

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
}*/

for (const navBar of navBarElem){
    navBar.addEventListener('click', function selected(event) {
        navBar.classList.add('active');
        console.log('works?');
    });
}


