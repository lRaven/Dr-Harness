'use strict';

//объект из которого извлекаются данные для всплывающего окна
let products = {
    product1: {
        img: `./img/card-img1.jpeg`,
        title: `Портупея “Пеппи”`,
        prices: {
            old: `4990 р.`,
            actual: `2990 р.`,
        },
        sizes: `<li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(1)">XS</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(2)">S</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(3)">M</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(4)">L</li>
                        <li class="size__item disabled">XL</li>
                        <li class="size__item disabled">XXL</li>`,
    },
    product2: {
        img: `./img/card-img2.jpeg`,
        title: `Портупея “Влади”`,
        prices: {
            old: `4990 р.`,
            actual: `2990 р.`,
        },
        sizes: `<li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(1)">XS</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(2)">S</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(3)">M</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(4)">L</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(5)">XL</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(6)">XXL</li>`,
    },
    product3: {
        img: `./img/card-img3.jpeg`,
        title: `Портупея “Джони Миллер”`,
        prices: {
            old: `4990 р.`,
            actual: `2990 р.`,
        },
        sizes: `<li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(1)">XS</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(2)">S</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(3)">M</li>
                        <li class="size__item" onclick="showAndHidePopupList(), rewriteSelectedSize(4)">L</li>
                        <li class="size__item disabled">XL</li>
                        <li class="size__item disabled">XXL</li>`,
    }
}


//Переключение вкладок товаров кнопками в 1 секции
const bannerNav = document.querySelectorAll('.banner__btn');
bannerNav.forEach(bannerBtn => {
    bannerBtn.addEventListener('click', () => {
        const tab1 = document.querySelector('.tab1');
        const tab2 = document.querySelector('.tab2');
        const radio1 = document.querySelector('.catalog__btn1');
        const radio2 = document.querySelector('.catalog__btn2');
        if (bannerBtn.textContent == 'Повседневные портупеи') {
            tab1.classList.add('open');
            tab2.classList.remove('open');
            radio1.checked = true;
        }
        else if (bannerBtn.textContent == 'Эротические портупеи') {
            tab1.classList.remove('open');
            tab2.classList.add('open');
            radio2.checked = true;
        }
    })
})


//Переключение между двумя вкладками (каталог)
const catalogNav = document.querySelectorAll('.radio__fake');
catalogNav.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const tab1 = document.querySelector('.tab1');
        const tab2 = document.querySelector('.tab2');
        if (navItem.classList.contains('radio1')) {
            tab1.classList.add('open');
            tab2.classList.remove('open');
        }
        else if (navItem.classList.contains('radio2')) {
            tab1.classList.remove('open');
            tab2.classList.add('open');
        }
    })
})

//открыть/закрыть меню-бургер
const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
    const menuBurgerItems = menuBurger.querySelectorAll('span'),
        navMobile = document.querySelector('.nav-mobile');

    navMobile.classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');

    menuBurgerItems.forEach(item => {
        item.classList.toggle('open');
    })
})

function hideMenuBurger() {
    const menuBurgerItems = menuBurger.querySelectorAll('span'),
        navMobile = document.querySelector('.nav-mobile');
    menuBurgerItems.forEach(item => {
        item.classList.remove('open');
    })
    navMobile.classList.remove('open');
    document.querySelector('body').classList.remove('lock');
}
const navMobile = document.querySelector('.nav-mobile ul'),
    navMobileItems = navMobile.querySelectorAll('li');
navMobileItems.forEach(item => {
    item.addEventListener('click', () => {
        hideMenuBurger();
    })
})

//показать всплывающее окно при клике на кнопку "Заказать" карточки товара
// и вызов функции записи данных во всплывающее окно
const buyBtn = document.querySelectorAll('.catalog__item-buy');
buyBtn.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector('.popup'),
            popupBg = document.querySelector('.popup-bg');

        document.querySelector('body').classList.add('lock');

        popup.classList.add('open');
        popupBg.classList.add('open');
        if (button.classList.contains('item1')) {
            rewritePopup(1);
        }
        else if (button.classList.contains('item2')) {
            rewritePopup(2);
        }
        else if (button.classList.contains('item3')) {
            rewritePopup(3);
        }
    })
})


//скрыть всплывающее окно заказа
function hidePopup() {
    hidePopupList();
    rewriteSelectedSize();
    const popup = document.querySelector('.popup'),
        popupBg = document.querySelector('.popup-bg');

    document.querySelector('body').classList.remove('lock');

    popup.classList.remove('open');
    popupBg.classList.remove('open');
}


//Вставка данных во всплывающее окно (каталог) (size list)
function rewritePopup(numberOfProduct) {
    const popupPhoto = document.querySelector('.popup-photo'),
        popupTitle = document.querySelector('.popup__title'),
        popupOldPrice = document.querySelector('.popup__old-price'),
        popupPrice = document.querySelector('.popup__price'),
        popupSizes = document.querySelector('.size__list');
    switch (numberOfProduct) {
        case 1: {
            popupPhoto.src = products.product1.img;
            popupTitle.textContent = products.product1.title;
            popupOldPrice.textContent = products.product1.prices.old;
            popupPrice.textContent = products.product1.prices.actual;
            popupSizes.innerHTML = products.product1.sizes;
            break;
        }
        case 2: {
            popupPhoto.src = products.product2.img;
            popupTitle.textContent = products.product2.title;
            popupOldPrice.textContent = products.product2.prices.old;
            popupPrice.textContent = products.product2.prices.actual;
            popupSizes.innerHTML = products.product2.sizes;
            break;
        }
        case 3: {
            popupPhoto.src = products.product3.img;
            popupTitle.textContent = products.product3.title;
            popupOldPrice.textContent = products.product3.prices.old;
            popupPrice.textContent = products.product3.prices.actual;
            popupSizes.innerHTML = products.product3.sizes;
            break;
        }
        default: {
            console.log('Wrong input');
            break;
        }
    }
}


//показ и скрытие выпадающего списка во всплывающем окне
function showAndHidePopupList() {
    const sizelist = document.querySelector('.size__list'),
        sizesArrow1 = document.querySelector('.sizes__arrow1'),
        sizesArrow2 = document.querySelector('.sizes__arrow2');
    sizelist.classList.toggle('open');
    sizesArrow1.classList.toggle('open');
    sizesArrow2.classList.toggle('open');
}


//скрытие выпадающего списка всплывающего окна
function hidePopupList() {
    const sizelist = document.querySelector('.size__list'),
        sizesArrow1 = document.querySelector('.sizes__arrow1'),
        sizesArrow2 = document.querySelector('.sizes__arrow2');

    sizelist.classList.remove('open');
    sizesArrow1.classList.remove('open');
    sizesArrow2.classList.remove('open');
}


//функция записи выбранного размера в блок selected
function rewriteSelectedSize(size) {
    const sizeList = document.querySelectorAll('.size__item');
    const sizeSelected = document.querySelector('.size__selected');

    switch (size) {
        case 1: {
            sizeSelected.textContent = sizeList[0].textContent;
            break;
        }
        case 2: {
            sizeSelected.textContent = sizeList[1].textContent;
            break;
        }
        case 3: {
            sizeSelected.textContent = sizeList[2].textContent;
            break;
        }
        case 4: {
            sizeSelected.textContent = sizeList[3].textContent;
            break;
        }
        case 5: {
            sizeSelected.textContent = sizeList[4].textContent;
            break;
        }
        case 6: {
            sizeSelected.textContent = sizeList[5].textContent;
            break;
        }
        default: {
            sizeSelected.textContent = 'Выберите размер';
        }
    }
}