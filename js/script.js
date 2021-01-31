$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let order = document.getElementById('order');

let customer = {
    name,
    email,
    tel
};


order.onclick = myClick;

function myClick() {
    customer.name = name.value;
    customer.email = email.value;
    customer.tel = tel.value;
    localStorage.setItem('person', JSON.stringify(customer));
    name.value = '';
    email.value = '';
    tel.value = '';
}
//=======================================================================================//
$('.openModal').click(function (e) {
    e.preventDefault();
    $('.modal').addClass('active');
});
$('.closeModal').click(function (e) {
    e.preventDefault();
    $('.modal').removeClass('active');
});

