const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerBtnNode2 = document.querySelector('.n1');
const burgerBtnNode3 = document.querySelector('.n2');
const burgerBtnNode4 = document.querySelector('.n3');
const burgerBtnNode5 = document.querySelector('.n4');
const burgerContentNode = document.querySelector('.js-burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);
burgerBtnNode2.addEventListener('click', toggleBurger);
burgerBtnNode3.addEventListener('click', toggleBurger);
burgerBtnNode4.addEventListener('click', toggleBurger);
burgerBtnNode5.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
