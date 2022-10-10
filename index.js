const renderProductsList = (data) => {
	const productsList = document.querySelector('.products-list');
	const template = document.querySelector('#product-template');
	const productLink = template.content.querySelector('.product-link');
	const productFavoriteIcon = template.content.querySelector('.favorite-icon');
	const productImage = template.content.querySelector('.product-image');
	const productTitle = template.content.querySelector('.product-title');
	const productPrice = template.content.querySelector('.product-price');
	data.forEach(product => {
		productLink.href = product.link;
		(product.favorite) ? productFavoriteIcon.classList.add('favorite-icon--active') : productFavoriteIcon.classList.remove('favorite-icon--active');
		productImage.src = product.img;
		productTitle.textContent = product.name;
		productPrice.textContent = product.price;
		const element = template.content.cloneNode(true);
		productsList.append(element);
	});
}

axios
			.get('https://mocki.io/v1/1e1db1bf-f2c5-4753-a897-82e7bc9af30f')
			.then(response => renderProductsList(response.data))
			.catch(error => alert(error));