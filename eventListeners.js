var clearList = document.getElementById('clear-button'),
    openBasket = document.getElementById('openCartButton'),
    basketPopup = document.getElementById('basketPopup'),
    openTshirtsCategory = document.getElementById('t-shirts'),
    openCupsCategory = document.getElementById('cups'),
    openCardsCategory = document.getElementById('cards'),
    openToysCategory = document.getElementById('toys'),
    openMagnetsCategory = document.getElementById('magnets'),
    openPencilsCategory = document.getElementById('pencils'),
    openBagsCategory = document.getElementById('bags'),
    openNotebooksCategory = document.getElementById('notebooks'),
    openScrumCategory = document.getElementById('scrum-cards'),
    openSmartphonesCategory = document.getElementById('smartphones'),
    openGlassesCategory = document.getElementById('glasses'),
    openTrainersCategory = document.getElementById('trainers'),
    categoryPopUp = document.getElementById('categoryPopupOverlay'),
    closePopupBtn = document.getElementById('closePopupBtn'),
    productList = document.getElementsByClassName('product-list')[0],
    popupHeader = document.getElementById('popUpHeader'),
    mainContent = document.getElementById('main'),
    closeBasketBtn = document.getElementById('closeBasketBtn'),
    continueShopping = document.getElementById('continue'),
    cartList = document.querySelector('.list-body > div'),
    buyButton = document.getElementById('buy');

function openPopup() {
    categoryPopUp.classList.add('opened');
}

openBasket.addEventListener('click', function() {
    basketPopup.classList.add('active');
})

closeBasketBtn.addEventListener('click', function() {
    basketPopup.classList.remove('active');
})

continueShopping.addEventListener('click', function() {
    basketPopup.classList.remove('active');
})

clearList.addEventListener('click', function() {
    resetCartData();
})

buyButton.addEventListener('click', function() {
    buy();

})

closePopupBtn.addEventListener("click", function() {
    categoryPopUp.classList.remove('opened');
    productList.innerHTML = '';
})



openTshirtsCategory.addEventListener('click', function() {
    addContentIntoPopup('tShirtsCategory');
    popupHeader.innerText = "T-Shirts";
    openPopup();
})

openCupsCategory.addEventListener('click', function() {
    addContentIntoPopup('cupsCategory');
    popupHeader.innerText = "Cups";
    openPopup();
})

openCardsCategory.addEventListener('click', function() {
    addContentIntoPopup('cardsCategory');
    popupHeader.innerText = "Cards";
    openPopup();
})

openToysCategory.addEventListener('click', function() {
    addContentIntoPopup('toysCategory');
    popupHeader.innerText = "Toys";
    openPopup();
})

openMagnetsCategory.addEventListener('click', function() {
    addContentIntoPopup('magnetsCategory');
    popupHeader.innerText = "Magnets";
    openPopup();
})

openPencilsCategory.addEventListener('click', function() {
    addContentIntoPopup('pencilsCategory');
    popupHeader.innerText = "Pens & Pencils";
    openPopup();
})

openBagsCategory.addEventListener('click', function() {
    addContentIntoPopup('bagsCategory');
    popupHeader.innerText = "Bags";
    openPopup();
})

openNotebooksCategory.addEventListener('click', function() {
    addContentIntoPopup('notebooksCategory');
    popupHeader.innerText = "Notebooks";
    openPopup();
})

openScrumCategory.addEventListener('click', function() {
    addContentIntoPopup('scrumCategory');
    popupHeader.innerText = "Scrum cards";
    openPopup();
})

openSmartphonesCategory.addEventListener('click', function() {
    addContentIntoPopup('smartphonesCategory');
    popupHeader.innerText = "Smartphones";
    openPopup();
})

openGlassesCategory.addEventListener('click', function() {
    addContentIntoPopup('glassesCategory');
    popupHeader.innerText = "Glasses";
    openPopup();
})

openTrainersCategory.addEventListener('click', function() {
    addContentIntoPopup('trainersCategory');
    popupHeader.innerText = "Trainers";
    openPopup();
})