function addContentIntoPopup(categoryToOpen) {
	var productsCollection;
	if (categoryToOpen === 'tShirtsCategory') {
		targetCategory = database.tShirtsCategory;
	} else if (categoryToOpen === 'cupsCategory') {
		targetCategory = database.cupsCategory;
	} else if (categoryToOpen === 'cardsCategory') {
		targetCategory = database.cardsCategory;
	} else if (categoryToOpen === 'toysCategory') {
		targetCategory = database.toysCategory;
	} else if (categoryToOpen === 'magnetsCategory') {
		targetCategory = database.magnetsCategory;
	} else if (categoryToOpen === 'pencilsCategory') {
		targetCategory = database.pencilsCategory;
	} else if (categoryToOpen === 'bagsCategory') {
		targetCategory = database.bagsCategory;
	} else if (categoryToOpen === 'notebooksCategory') {
		targetCategory = database.notebooksCategory;
	} else if (categoryToOpen === 'scrumCategory') {
		targetCategory = database.scrumCategory;
	} else if (categoryToOpen === 'smartphonesCategory') {
		targetCategory = database.smartphonesCategory;
	} else if (categoryToOpen === 'glassesCategory') {
		targetCategory = database.glassesCategory;
	} else if (categoryToOpen === 'trainersCategory') {
		targetCategory = database.trainersCategory;
	}

	var productsArray = targetCategory.products;

	for (var i = 0; i < productsArray.length; i++) {
		var product = productsArray[i];
		var tmpl = document.getElementById('productTemplate').content.cloneNode(true);


		tmpl.querySelector('.title').innerText = product.title;
		tmpl.querySelector('.price').innerText = product.price + '$';
		tmpl.querySelector('.amount').innerText = product.amount;
		tmpl.querySelector('.item-img').style.backgroundImage = 'url(' + product.img + ')';

		tmpl.querySelector('.product').setAttribute("data-category-id", targetCategory.categoryId);
		tmpl.querySelector('.product').setAttribute("data-product-id", i);

		productList.appendChild(tmpl);


	}
}