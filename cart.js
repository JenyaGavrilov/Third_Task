var cart = {
    items: [],
    getSum() {
        var sum = 0;
        if (this.items.length != 0) {
            this.items.forEach(function (item) {
                if (item.amount != 1) {
                    sum += item.price * item.amount;
                } else {
                    sum += item.price;
                }
            })
        }
        return sum;
    }
}

productList.addEventListener('click', function (e) {

    if (e.target.classList.contains('plus-button') || e.target.classList.contains('minus-button')) {
        var productElement = e.target.closest('.product'),
            categoryId = productElement.getAttribute('data-category-id'),
            productId = productElement.getAttribute('data-product-id'),
            categoryList = database[categoryId].products;

        for (var i = categoryList.length - 1; i >= 0; i--) {
            if (i === +productId) {
                let productItem = categoryList[i];
                if (e.target.classList.contains('plus-button')) {
                    addToCart(productItem, productElement);
                } else {
                    removeFromCart(productItem, productElement);
                }
            }
        }
    }
});

cartList.addEventListener('click', function (e) {
    if (e.target.classList.contains('add') || e.target.classList.contains('remove')) {
        var cartItemId = e.target.closest('.cart-item').getAttribute('data-cart-id'),
            productElement = productList.querySelector('.product[data-cart-id="' + cartItemId + '"]'),
            productItem = cart.items.find(item => item.id = cartItemId);
        if (e.target.classList.contains('add')) {
            addToCart(productItem, productElement);
        } else {
            removeFromCart(productItem, productElement);
        }
    }
});

function addToCart(productItem, productElement) {
    

    itemToAdd = Object.assign(productItem);

    if (cart.items.includes(itemToAdd)) {
        updateExistedItem(itemToAdd, true);
    } else {
        addNewItem(itemToAdd, productElement);
    }

    updpateItemData(itemToAdd);
    updateCartSum();
}

function removeFromCart(productItem, productElement) {
    

    itemToRemove = Object.assign(productItem);

    if (cart.items.includes(itemToRemove)) {
        updateExistedItem(itemToRemove, false);
        updpateItemData(itemToRemove);
        if (itemToRemove.amount == 0) {
            deleteItem(itemToRemove);
        }
        updateCartSum();
    }

}

function deleteItem(itemToRemove) {
    var itemId = itemToRemove.id
    
    cart.items.splice(itemId, 1);
    var cartItemToDelete = cartList.querySelector('.cart-item[data-cart-id="' + itemId + '"]');
    cartList.removeChild(cartItemToDelete);
    productList.querySelector('.product[data-cart-id="' + itemId + '"]').querySelector('.amount').innerText = 0;
}

function addNewItem(itemToAdd, productElement) {
    var cartItemElem = document.getElementById('cartItemTemplate').content.cloneNode(true);

    cartItemElem.querySelector('.product-name').innerText = itemToAdd.title;
    cartItemElem.querySelector('.product-price').innerText = '$ ' + itemToAdd.price;
    cartItemElem.querySelector('.cart-item').setAttribute('data-cart-id', cart.items.length);
    productElement.setAttribute('data-cart-id', cart.items.length);

    cartList.appendChild(cartItemElem);

    itemToAdd.amount++;
    itemToAdd.id = cart.items.length;

    cart.items.push(itemToAdd);
}



function updpateItemData(itemToUpdate) {
    var itemToUpdate = cart.items.find(item => item == itemToAdd);

    cartList.querySelector('.cart-item[data-cart-id="' + itemToUpdate.id + '"]').querySelector('.list-amount').innerText = itemToUpdate.amount;
    productList.querySelector('.product[data-cart-id="' + itemToUpdate.id + '"]').querySelector('.amount').innerText = itemToUpdate.amount;

}


function updateExistedItem(itemToUpdate, plus) {
    cart.items.find(item => {
        if (item === itemToUpdate) {
            if (plus) {
                item.amount++;
            } else {
                if (item.amount >= 1) {
                    item.amount--;
                } else {
                    item.amount == 0;
                }
            }
            return item;
        }
    });
}

function updateCartSum() {
    var sum = cart.getSum(),
        openCartButton = document.getElementById('openCartButton'),
        sumOutputElem = document.querySelector('.sum-output');
    sumOutputElem.innerText = sum + ' $';
    openCartButton.innerText = sum + ' $';
}

function resetCartData() {
    cartList.innerHTML = '';
    cart.items = [];
    updateCartSum();

    var productsToReset = productList.querySelectorAll('.product[data-cart-id]');

    [].forEach.call(productsToReset, elem => {
        elem.querySelector('.amount').innerHTML = 0;
    })
}



function buy() {
    if (cart.getSum() !== 0) {
        alert('You have ordered for ' + cart.getSum() + '$');
    } else {
        alert('Cart is empty')
    }
    resetCartData();
}